import { Global, ThemeProvider } from "@emotion/react"
import type { Preview } from "@storybook/react"
import { theme } from "../src/theme/theme"
import React from "react"
import { globalStyle } from "../src/theme/globalStyle"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
