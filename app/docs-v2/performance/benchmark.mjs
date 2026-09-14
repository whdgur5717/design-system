import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises"
import { createServer } from "node:http"
import path from "node:path"
import { performance } from "node:perf_hooks"

import { chromium } from "playwright"

const args = Object.fromEntries(
  process.argv.slice(2).map((argument) => {
    const [key, ...value] = argument.replace(/^--/, "").split("=")
    return [key, value.join("=")]
  }),
)

if (!args.label || !args.root || !args.output) {
  throw new Error(
    "Usage: node performance/benchmark.mjs --label=next --root=out --output=performance/results/next.json",
  )
}

const root = path.resolve(args.root)
const output = path.resolve(args.output)
const routes = ["/", "/post/1/"]
const sampleCount = 9
const profiles = {
  desktop: {
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    cpuRate: 1,
    latency: 0,
    downloadThroughput: -1,
    uploadThroughput: -1,
  },
  mobile: {
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    cpuRate: 4,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (0.75 * 1024 * 1024) / 8,
  },
}

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
}

async function resolveFile(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname)
  const relative = pathname.replace(/^\/+|\/+$/g, "")
  const candidates = relative
    ? [
        path.join(root, relative),
        path.join(root, `${relative}.html`),
        path.join(root, relative, "index.html"),
      ]
    : [path.join(root, "index.html")]

  for (const candidate of candidates) {
    try {
      if ((await stat(candidate)).isFile()) return candidate
    } catch {
      // Try the next static path variant.
    }
  }

  return null
}

const server = createServer(async (request, response) => {
  const file = await resolveFile(request.url ?? "/")
  if (!file) {
    response.writeHead(404).end("Not found")
    return
  }

  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": mimeTypes[path.extname(file)] ?? "application/octet-stream",
  })
  response.end(await readFile(file))
})

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
const address = server.address()
if (!address || typeof address === "string")
  throw new Error("Missing server port")

const browser = await chromium.launch()
const results = {
  label: args.label,
  measuredAt: new Date().toISOString(),
  browser: browser.version(),
  node: process.version,
  artifact: await summarizeArtifact(root),
  sampleCount,
  routes,
  profiles: {},
}

try {
  for (const [profileName, profile] of Object.entries(profiles)) {
    results.profiles[profileName] = {}

    for (const route of routes) {
      const samples = []

      for (let sample = 0; sample <= sampleCount; sample += 1) {
        const context = await browser.newContext({
          viewport: profile.viewport,
          deviceScaleFactor: profile.deviceScaleFactor,
        })
        const page = await context.newPage()
        const session = await context.newCDPSession(page)
        await session.send("Network.enable")
        await session.send("Network.setCacheDisabled", { cacheDisabled: true })
        await session.send("Network.emulateNetworkConditions", {
          offline: false,
          latency: profile.latency,
          downloadThroughput: profile.downloadThroughput,
          uploadThroughput: profile.uploadThroughput,
        })
        await session.send("Emulation.setCPUThrottlingRate", {
          rate: profile.cpuRate,
        })
        await page.addInitScript(() => {
          window.__benchmark = { cls: 0, lcp: 0, longTask: 0 }
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              window.__benchmark.lcp = entry.startTime
            }
          }).observe({ type: "largest-contentful-paint", buffered: true })
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) window.__benchmark.cls += entry.value
            }
          }).observe({ type: "layout-shift", buffered: true })
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              window.__benchmark.longTask += Math.max(0, entry.duration - 50)
            }
          }).observe({ type: "longtask", buffered: true })
        })

        const startedAt = performance.now()
        const navigationResponse = await page.goto(
          `http://127.0.0.1:${address.port}${route}`,
          {
            waitUntil: "load",
          },
        )
        if (!navigationResponse?.ok()) {
          throw new Error(`${route} returned ${navigationResponse?.status()}`)
        }
        await page.waitForTimeout(1000)
        const wallTime = performance.now() - startedAt
        const metrics = await page.evaluate((wallTime) => {
          const navigation = performance.getEntriesByType("navigation")[0]
          const paint = performance.getEntriesByName(
            "first-contentful-paint",
          )[0]
          const resources = performance.getEntriesByType("resource")
          const scripts = resources.filter(
            (entry) =>
              entry.initiatorType === "script" || entry.name.endsWith(".js"),
          )

          return {
            ttfb: navigation.responseStart,
            fcp: paint?.startTime ?? null,
            lcp: window.__benchmark.lcp || null,
            domContentLoaded: navigation.domContentLoadedEventEnd,
            load: navigation.loadEventEnd,
            wallTime,
            cls: window.__benchmark.cls,
            tbt: window.__benchmark.longTask,
            requests: resources.length + 1,
            transferBytes:
              navigation.transferSize +
              resources.reduce((total, entry) => total + entry.transferSize, 0),
            jsTransferBytes: scripts.reduce(
              (total, entry) => total + entry.transferSize,
              0,
            ),
            jsDecodedBytes: scripts.reduce(
              (total, entry) => total + entry.decodedBodySize,
              0,
            ),
            domNodes: document.querySelectorAll("*").length,
          }
        }, wallTime)

        if (sample > 0) samples.push(metrics)
        await context.close()
      }

      results.profiles[profileName][route] = {
        summary: summarize(samples),
        samples,
      }
    }
  }
} finally {
  await browser.close()
  await new Promise((resolve) => server.close(resolve))
}

await mkdir(path.dirname(output), { recursive: true })
await writeFile(output, JSON.stringify(results, null, 2))
console.log(
  JSON.stringify(
    Object.fromEntries(
      Object.entries(results.profiles).map(([profile, routes]) => [
        profile,
        Object.fromEntries(
          Object.entries(routes).map(([route, result]) => [
            route,
            result.summary,
          ]),
        ),
      ]),
    ),
    null,
    2,
  ),
)

function summarize(samples) {
  return Object.fromEntries(
    Object.keys(samples[0]).map((metric) => {
      const values = samples
        .map((sample) => sample[metric])
        .filter((value) => typeof value === "number")
        .sort((left, right) => left - right)
      return [
        metric,
        {
          median: percentile(values, 0.5),
          p25: percentile(values, 0.25),
          p75: percentile(values, 0.75),
        },
      ]
    }),
  )
}

function percentile(values, percentileValue) {
  const index = (values.length - 1) * percentileValue
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  if (lower === upper) return values[lower]
  return values[lower] + (values[upper] - values[lower]) * (index - lower)
}

async function summarizeArtifact(directory) {
  const summary = { files: 0, total: 0, html: 0, css: 0, js: 0, other: 0 }

  async function visit(currentDirectory) {
    for (const entry of await readdir(currentDirectory, {
      withFileTypes: true,
    })) {
      const file = path.join(currentDirectory, entry.name)
      if (entry.isDirectory()) {
        await visit(file)
        continue
      }

      const bytes = (await stat(file)).size
      const extension = path.extname(file).slice(1)
      summary.files += 1
      summary.total += bytes
      if (Object.hasOwn(summary, extension)) summary[extension] += bytes
      else summary.other += bytes
    }
  }

  await visit(directory)
  return summary
}
