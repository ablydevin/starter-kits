import { defineConfig } from "vite";
import { pluginRestAPI } from "vite-plugin-rest-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginRestAPI({
      // Configuration options go here
      dirs: [ { dir: 'api', route: '', exclude: []} ]
    }),
  ],
});