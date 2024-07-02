import { defineConfig, defineTextStyles } from "@pandacss/dev"
import { transformObject } from "./src/theme/convert"
import {
  basicColorToken,
  semanticColorToken,
  borderRadius,
  typography,
  fontSize,
} from "./src/theme/tokens/index"
export default defineConfig({
  preflight: true,
  minify: true,
  hash: true,
  clean: true,
  outExtension: "js",
  jsxFramework: "react",
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  presets: ["@pandacss/preset-base"],
  importMap: ["@styled"],
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
    borderRadius: {
      values: "radii",
    },
  },
  strictTokens: true,
  strictPropertyValues: true,
  theme: {
    extend: {
      textStyles: typography,
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    tokens: {
      radii: transformObject(borderRadius),
      fontSizes: transformObject(fontSize),
    },
    semanticTokens: {
      colors: {
        ...basicColorToken,
        ...semanticColorToken,
        white: {
          value: {
            base: "#FFFFFF",
            _dark: "#FFFFFF",
          },
        },
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
})
