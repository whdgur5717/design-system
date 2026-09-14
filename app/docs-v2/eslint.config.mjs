import { config } from "@jongh/eslint/base"

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [".astro/**", "dist/**", "out/**"],
  },
  ...config,
]
