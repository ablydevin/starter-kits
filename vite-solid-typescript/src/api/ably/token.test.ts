import { expect, test } from "vitest";
import httpMocks from "node-mocks-http";
import { GET } from "./token";


test("return Ably token request", async () => {
  const mockExpressResponse = httpMocks.createResponse();

  await GET(mockExpressResponse);
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
