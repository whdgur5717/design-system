import { css } from "@emotion/react"

import { themeMode } from "./themeMode"

export const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    font-family: Pretendard-Regular;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
  }

  body {
    ${themeMode.light};
  }

  body[data-theme="light"] {
    ${themeMode.light};
  }

  body[data-theme="dark"] {
    ${themeMode.dark};
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themeMode.dark}
    }
  }
`
//변수들이 바뀌는것일 뿐
