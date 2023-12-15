import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pluginRestAPI } from "vite-plugin-rest-api";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginRestAPI({
      // Configuration options go here
    }),
  ],
});