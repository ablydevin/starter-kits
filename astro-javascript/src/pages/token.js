import Ably from "ably";

export async function GET({ params }) {
  // Your application should perform some type of user
  // authorization to validate that the user is allowed
  // to receive a token before fulfilling the token request
  // if (requesting_user.isAuthenticated) {

  const clientId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const client = new Ably.Rest.Promise(import.meta.env.ASTRO_ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  });
  //console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return new Response(JSON.stringify(tokenRequestData), {
    headers: {
      "Content-Type": "application/json"
    }
  });

  //} else {
  // res.status(401).json({ 'error':'User is not authorized' })
  //}
}
