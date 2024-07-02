import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import * as path from "path"
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styled/*": path.resolve(__dirname, "./styled-system"),
    },
  },
  build: {
    rollupOptions: {
      external: [/@styled/],
    },
  },
})
