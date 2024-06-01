import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Global, ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme"
import { globalStyle } from "./theme/globalStyle"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
