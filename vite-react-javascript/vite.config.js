import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pluginAPIRoutes } from "vite-plugin-api-routes";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginAPIRoutes({
      // Configuration options go here
    }),
  ],
});