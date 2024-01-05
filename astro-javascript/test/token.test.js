import { expect, test } from "vitest";
import { GET } from "../src/pages/token";

test("return Ably token request", async () => {
  const response = await GET();

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
