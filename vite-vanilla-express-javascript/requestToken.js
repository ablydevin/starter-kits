import Ably from "ably/promises";

const requestToken = async (req, res) => {
  
  const clientId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  console.log(`Key: ${process.env.VITE_ABLY_API_KEY}`);

  const client = new Ably.Rest.Promise(process.env.VITE_ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return res.json(tokenRequestData);
};
export default requestToken;