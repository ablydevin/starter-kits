import { beforeAll, expect, test } from "vitest";
import httpMocks from "node-mocks-http";
import { GET } from "./route";
import { loadEnvConfig } from '@next/env'

const res = httpMocks.createResponse();

beforeAll(async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
})

test("return Ably token request", async () => {
  const response = await GET(null, res);
  
  expect(response.status).toBe(200);

  const headers = response.headers;
  expect(headers.has("content-type")).toBe(true);
  expect(headers.get("content-type")).toBe("application/json");

  const data = await response.json();
  expect(data).toHaveProperty("keyName")
  expect(data).toHaveProperty("clientId")
  expect(data).toHaveProperty("timestamp")
  expect(data).toHaveProperty("nonce")
  expect(data).toHaveProperty("mac");
});
