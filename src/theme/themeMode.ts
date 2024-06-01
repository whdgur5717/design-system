import { Color, color } from "./color"
import { theme } from "./theme"

const semanticTheme = {
  bg_main: { light: theme.color.white.light, dark: theme.color.grey_100.dark },
  bg_elevated: {
    light: theme.color.white.light,
    dark: theme.color.grey_200.dark,
  },
  border_basic: {
    light: theme.color.grey_300.light,
    dark: theme.color.grey_200.dark,
  },
  border_basic2: {
    light: theme.color.grey_300.light,
    dark: "none",
  },
  text_primary: {
    light: theme.color.grey_400.light,
    dark: theme.color.grey_400.dark,
  },
  text_secondary: {
    light: theme.color.grey_400.light,
    dark: theme.color.grey_500.dark,
  },
}

type ThemeVariables = Color & typeof semanticTheme

const palette = Object.assign(color, semanticTheme)

type ThemeMode = "light" | "dark"
type VariableKey = keyof ThemeVariables
type TPalette = Record<VariableKey, { light: string; dark: string }>
//여기에 베이직 컬러 팔레트도 추가하고 싶음

const buildColorCssVariables = (palette: TPalette) => {
  const cssVariables: Record<ThemeMode, string> = {
    light: "",
    dark: "",
  }
  Object.keys(cssVariables).forEach((str) => {
    Object.entries(palette).forEach(([key, value]) => {
      const mode = str as ThemeMode
      const cssVarName = `--${key.replace(/_/g, "-")}`
      const cssVarValue = value[mode]
      cssVariables[mode] += `${cssVarName}: ${cssVarValue};\n`
    })
  })
  return cssVariables
}

//css 변수들이 들어있는 객체
export const themeMode = buildColorCssVariables(palette)

const cssVar = (name: string) => `var(--${name.replace(/_/g, "-")})`

const variableKeys = Object.keys(palette) as VariableKey[]

export const colorPalette: Record<VariableKey, string> = variableKeys.reduce(
  (acc, current) => {
    acc[current] = cssVar(current)
    return acc
  },
  {} as Record<VariableKey, string>,
)
