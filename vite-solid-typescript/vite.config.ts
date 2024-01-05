import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { pluginAPIRoutes } from "vite-plugin-api-routes";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solid(),
    pluginAPIRoutes({
      // Configuration options go here
    }),
  ],
});