import Ably from "ably/promises";

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {

    const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const client = new Ably.Rest.Promise(process.env.VITE_ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: clientId,
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);

    return {
      statusCode: 200,
      body: JSON.stringify(tokenRequestData),
      // // more keys you can return:
      headers: { "Content-Type": "application/json" },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
