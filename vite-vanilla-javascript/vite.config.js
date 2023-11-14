import { defineConfig } from "vite";
import { pluginAPI } from "vite-plugin-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginAPI({
      // Configuration options go here
      dirs: [ { dir: 'api', route: '', exclude: []} ]
    }),
  ],
});