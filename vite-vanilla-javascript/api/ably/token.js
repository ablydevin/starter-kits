import Ably from "ably/promises";

export const GET = async (req, res) => {

 // Your application should perform some type of user 
 // authorization to validate that the user is allowed 
 // to receive a token before fulfilling the token request 
 // if (requesting_user.isAuthenticated) {

    const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const client = new Ably.Rest(import.meta.env.VITE_ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: clientId,
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
    return res.json(tokenRequestData);

  //} else {
 // res.status(401).json({ 'error':'User is not authorized' })
  //}
};