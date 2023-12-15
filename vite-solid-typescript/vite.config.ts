import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { pluginRestAPI } from "vite-plugin-rest-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solid(),
    pluginRestAPI({
      // Configuration options go here
    }),
  ],
});