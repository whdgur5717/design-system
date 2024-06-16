import { css } from "@emotion/react"
import { colorPalette } from "../../theme/themeMode"

export const height = {
  sm: "40px",
  lg: "50px",
} as const

export const getRootStyle = (size: keyof typeof height) =>
  css(`
  border: 1px solid ${colorPalette.border_basic2};
  border-radius: 5px;
  display: flex;
  flex-direction : column;
  justify-content : center;
  text-align : start;
  min-width: 140px;
  padding-left: 8px;
  padding-right: 8px;
  height : ${height[size]};
  ${size === "sm" ? `font-color : red` : `font-size : 2rem`};
  &:where(:has(input:focus)) {
      outline: 2px solid ${colorPalette.blue_300};
      outline-offset: -1px;
    };
  &:where(:has(input:focus)) {
      outline: 2px solid ${colorPalette.blue_300};
      outline-offset: -1px;
    };
  &.invalid {
      border-color : ${colorPalette.red_300}
    };
    `)

export const inputStyle = css({
  width: "100%",
  display: "flex",
  border: "none",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
})
