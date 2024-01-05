import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { pluginAPIRoutes } from "vite-plugin-api-routes";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginAPIRoutes({
      // Configuration options go here
    }),
  ],
});