import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { pluginAPIRoutes } from "vite-plugin-api-routes";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    pluginAPIRoutes({
      // Configuration options go here
    }),
  ],
});