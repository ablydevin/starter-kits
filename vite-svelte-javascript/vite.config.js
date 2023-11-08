import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { pluginAPI } from "vite-plugin-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    pluginAPI({
      // Configuration options go here
    }),
  ],
});