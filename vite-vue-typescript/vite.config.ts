import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { pluginAPI } from "vite-plugin-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginAPI({
      // Configuration options go here
    }),
  ],
});