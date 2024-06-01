import { css } from "@emotion/react"

export type Typography = typeof typography

export const typography = {
  header_01: css({
    fontSize: "2.8rem",
    lineHeight: "36px",
    fontWeight: "700",
  }),
  header_02: css({
    fontSize: "2.4rem",
    lineHeight: "32px",
    fontWeight: "700",
  }),
  subHeader_01: css({
    fontSize: "1.8rem",
    lineHeight: "24px",
    fontWeight: "700",
  }),
  subHeader_02: css({
    fontSize: "1.6rem",
    lineHeight: "24px",
    fontWeight: "700",
  }),
  body_01: css({
    fontSize: "1.6rem",
    lineHeight: "24px",
    fontWeight: "600",
  }),
  body_02: css({
    fontSize: "1.4rem",
    lineHeight: "20px",
    fontWeight: "600",
  }),
  caption_01: css({
    fontSize: "1.2rem",
    lineHeight: "18px",
    fontWeight: "600",
  }),
  caption_02: css({
    fontSize: "1rem",
    lineHeight: "12px",
    fontWeight: "700",
  }),
} as const
