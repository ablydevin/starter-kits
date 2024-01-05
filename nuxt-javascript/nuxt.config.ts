// https://nuxt.com/docs/api/configuration/nuxt-config
import * as dotenv from 'dotenv'

const path = require('path');
const fs = require('fs');
const env = process.env.NODE_ENV;

const envPath = path.resolve(process.cwd(), `.${env}.env`);
const defaultEnvPath = path.resolve(process.cwd(), '.env');

dotenv.config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
})

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    ablyApiKey: process.env.NUXT_ABLY_API_KEY,
  },
  modules: [
    '@nuxt/test-utils/module'
  ],
})
