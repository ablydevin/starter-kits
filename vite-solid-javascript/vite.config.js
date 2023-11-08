import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { pluginAPI } from "vite-plugin-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solid(),
    pluginAPI({
      // Configuration options go here
    }),
  ],
});