import express from "express";
import { defineConfig, loadEnv } from "vite";
import requestToken from './requestToken'

const app = express();

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  app.get("/api/ably/token", requestToken);

  return { plugins: [
    expressPlugin()] 
  } 
})

const proxy = {
  "/api": {}, // proxy our /api route to nowhere
};

function expressPlugin() {
  return {
    name: "express-plugin",
    config() {
      return {
        server: { proxy },
        preview: { proxy },
      };
    },
    configureServer(server) {
      server.middlewares.use(app);
    },
  };
}