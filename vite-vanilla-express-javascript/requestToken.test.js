import { expect, test } from "vitest";
import httpMocks from "node-mocks-http";
import requestToken from "./requestToken";
import { loadEnv } from "vite";

test("return Ably token request", async () => {

  process.env = { ...process.env, ...loadEnv('mock', process.cwd()) };

  const mockExpressResponse = httpMocks.createResponse();

  await requestToken(null, mockExpressResponse);
  expect(mockExpressResponse.statusCode).toBe(200);

  const headers = mockExpressResponse._getHeaders(); 
  expect(headers).toHaveProperty("content-type");
  expect(headers['content-type']).toBe('application/json')

  const data = mockExpressResponse._getJSONData();
  expect(data).toHaveProperty("keyName")
  expect(data).toHaveProperty("clientId")
  expect(data).toHaveProperty("timestamp")
  expect(data).toHaveProperty("nonce")
  expect(data).toHaveProperty("mac");
});
