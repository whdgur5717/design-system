import { defineConfig, defineTextStyles } from "@pandacss/dev"
import { transformObject } from "./src/theme/convert"
import { fontSize, fontWeight, colors } from "./src/theme"
import { radius } from "./src/theme/radius"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",
  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  // Files to exclude
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  presets: ["@pandacss/preset-base"],
  exclude: [],
  eject: true,
  utilities: {
    color: {
      values: "colors",
    },
    fontWeight: {
      values: "fontWeights",
    },
    width: {
      values: { type: "string" },
    },
    maxWidth: {
      values: { type: "string" },
    },
    minWidth: {
      values: { type: "string" },
    },
    height: {
      values: { type: "string" },
    },
    maxHeight: {
      values: { type: "string" },
    },
    minHeight: {
      values: { type: "string" },
    },
  },
  strictTokens: true,
  strictPropertyValues: true,
  theme: {
    tokens: {
      fontSizes: transformObject(fontSize),
      fontWeights: transformObject(fontWeight),
      radii: transformObject(radius),
    },
    semanticTokens: {
      colors,
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
})
