import "@emotion/react"
import type { Color } from "./color"
import type { FontSize } from "./fontSize"
import type { FontWeight } from "./fontWeight"
import type { ZIndex } from "./zIndex"
import type { Typography } from "./typography"
declare module "@emotion/react" {
  export interface Theme {
    color: Color
    fontSize: FontSize
    fontWeight: FontWeight
    zIndex: ZIndex
    typography: Typography
  }
}
