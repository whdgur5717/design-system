export type Color = typeof color
//베이직 컬러 팔레트
//모든 컬러는 라이트/다크 대응이 되도록 만들기 - 시멘틱이던 베이직이던

export const color = {
  white: { light: "#FFFFFF", dark: "#FFFFFF" },
  blue_100: { light: "#E1F5FF", dark: "#0077C8" },
  blue_200: { light: "#7DD5FF", dark: "#00A9FF" },
  blue_300: { light: "#0C356A", dark: "#0C356A" },

  red_100: { light: "#FFEEF1", dark: "#D73F2F" },
  red_200: { light: "#FF6F61", dark: "#FF6557" },
  red_300: { light: "#E45141", dark: "#FFD3D6" },

  grey_100: { light: "#FEFEFE", dark: "#121212" },
  grey_200: { light: "#F7F8F9", dark: "#2E363A" },
  grey_300: { light: "#646F6C", dark: "#999FA4" },
  grey_400: { light: "#374553", dark: "#C5C8CE" },
  grey_500: { light: "#161D24", dark: "#FDFDFD" },
}
