import { json } from "@remix-run/node";
import Ably from "ably";

export async function loader({ params }) {
  const clientId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const client = Ably.Rest.Promise(process.env.REMIX_ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return json(tokenRequestData);
}
