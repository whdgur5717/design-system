export type Typography = typeof typography

export const typography = {
  header_01: {
    fontSize: "2.8rem",
    lineHeight: "36px",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      fontSize: "2.4rem",
      lineHeight: "32px",
    },
  },
  header_02: {
    fontSize: "2.4rem",
    lineHeight: "32px",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      lineHeight: "28px",
    },
  },
  subHeader_01: {
    fontSize: "1.8rem",
    lineHeight: "24px",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      fontSize: "1.6rem",
      lineHeight: "22px",
    },
  },
  subHeader_02: {
    fontSize: "1.6rem",
    lineHeight: "24px",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      fontSize: "1.4rem",
      lineHeight: "20px",
    },
  },
  body_01: {
    fontSize: "1.6rem",
    lineHeight: "24px",
    fontWeight: "600",
    "@media (max-width: 600px)": {
      fontSize: "1.4rem",
      lineHeight: "22px",
    },
  },
  body_02: {
    fontSize: "1.4rem",
    lineHeight: "20px",
    fontWeight: "600",
    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
      lineHeight: "18px",
    },
  },
  caption_01: {
    fontSize: "1.2rem",
    lineHeight: "18px",
    fontWeight: "600",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      lineHeight: "16px",
    },
  },
  caption_02: {
    fontSize: "1rem",
    lineHeight: "12px",
    fontWeight: "700",
    "@media (max-width: 600px)": {
      fontSize: "0.8rem",
      lineHeight: "10px",
    },
  },
} as const
