import { unified } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import stylex from "@stylexjs/unplugin"
import { defineConfig } from "astro/config"
import { remarkHeading, remarkStructure } from "fumadocs-core/mdx-plugins"

export default defineConfig({
  integrations: [react(), mdx()],
  devToolbar: { enabled: false },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkHeading, remarkStructure],
    }),
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  output: "static",
  prefetch: true,
  trailingSlash: "never",
  build: { format: "file" },
  vite: {
    plugins: [stylex.vite({ devMode: "css-only" })],
  },
})
