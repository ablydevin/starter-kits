import { defineConfig } from "vite";
import { pluginAPIRoutes } from "vite-plugin-api-routes";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginAPIRoutes({
      // Configuration options go here
    }),
  ],
});