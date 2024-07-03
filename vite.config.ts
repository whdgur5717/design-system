import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import * as path from "path"
export default defineConfig({
  plugins: [react()],
})
