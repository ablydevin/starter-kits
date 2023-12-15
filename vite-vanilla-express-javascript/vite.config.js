import express from "express";
import { defineConfig, loadEnv } from "vite";
import Ably from "ably/promises";

const app = express();

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  app.get("/api/ably/token", async (req, res) => {
    const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    console.log(`Key: ${process.env.VITE_ABLY_API_KEY}`);

    const client = new Ably.Rest.Promise(process.env.VITE_ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: clientId,
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
    return res.json(tokenRequestData);
  });

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