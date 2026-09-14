import { describe, expect, it } from "vitest"

import { generateStylexTokens } from "./generate"

describe("generateStylexTokens", () => {
  it("renders the Panda token paths as StyleX constants", () => {
    const { declarations, javascript } = generateStylexTokens()

    expect(javascript).toContain("export const colors = stylex.defineConsts({")
    expect(javascript).toContain('"fg.neutral": "var(--colors-fg-neutral)",')
    expect(javascript).toContain(
      '"palette.light.red.500": "var(--colors-palette-light-red-500)",',
    )
    expect(javascript).toContain('"0.5": "var(--spacing-0\\\\.5)",')
    expect(javascript).toContain('"4": "var(--spacing-4)",')
    expect(javascript).toContain('"t4.static": "var(--font-sizes-t4-static)",')
    expect(javascript).toContain('"glow.magic": "var(--gradients-glow-magic)",')
    expect(declarations).toContain("export declare const colors: Readonly<{")
    expect(declarations).toContain('"fg.neutral": string')
  })
})
