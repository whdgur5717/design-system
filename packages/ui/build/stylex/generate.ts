import {
  colorTokens,
  durationTokens,
  easingTokens,
  fontSizeTokens,
  fontWeightTokens,
  gradientTokens,
  lineHeightTokens,
  radiusTokens,
  semanticColorTokens,
  shadowTokens,
  spacingTokens,
} from "../../src/token"

const tokenTrees = {
  colors: [colorTokens, semanticColorTokens],
  durations: [durationTokens],
  easings: [easingTokens],
  fontSizes: [fontSizeTokens],
  fontWeights: [fontWeightTokens],
  lineHeights: [lineHeightTokens],
  radii: [radiusTokens],
  spacing: [spacingTokens],
  gradients: [gradientTokens],
  shadows: [shadowTokens],
}

function flattenTokenTree(value: object, path: string[] = []): string[][] {
  if (Object.hasOwn(value, "value")) {
    return [path]
  }

  return Object.entries(value).flatMap(([key, child]) =>
    flattenTokenTree(child, [...path, key]),
  )
}

function renderTokenGroup(
  category: string,
  trees: readonly object[],
): ReadonlyArray<readonly [string, string]> {
  const names = new Set<string>()
  const entries = trees
    .flatMap((tree) => flattenTokenTree(tree))
    .map((path) => {
      const segments = path.filter((segment) => segment !== "DEFAULT")
      const name = segments.join(".")

      if (names.has(name)) {
        throw new Error(`Duplicate ${category} token: ${name}`)
      }

      names.add(name)

      const variableName = [category, ...segments]
        .join("-")
        .replace(/[A-Z]/g, (character) => `-${character.toLowerCase()}`)
        .replaceAll(".", "\\.")
      const variable = `var(--${variableName})`

      return [name, variable] as const
    })
    .sort(([left], [right]) => (left < right ? -1 : left > right ? 1 : 0))

  return entries
}

export function generateStylexTokens(): {
  declarations: string
  javascript: string
} {
  const groups = Object.entries(tokenTrees).map(([category, trees]) => ({
    category,
    entries: renderTokenGroup(category, trees),
  }))

  const javascript = [
    "/* Generated from the @jongh/ui Panda tokens. Do not edit. */",
    'import * as stylex from "@stylexjs/stylex"',
    "",
    ...groups.flatMap(({ category, entries }) => [
      `export const ${category} = stylex.defineConsts({`,
      ...entries.map(
        ([name, variable]) =>
          `  ${JSON.stringify(name)}: ${JSON.stringify(variable)},`,
      ),
      "})",
      "",
    ]),
  ].join("\n")

  const declarations = [
    "/* Generated from the @jongh/ui Panda tokens. Do not edit. */",
    ...groups.flatMap(({ category, entries }) => [
      `export declare const ${category}: Readonly<{`,
      ...entries.map(([name]) => `  ${JSON.stringify(name)}: string`),
      "}>",
      "",
    ]),
  ].join("\n")

  return { declarations, javascript }
}
