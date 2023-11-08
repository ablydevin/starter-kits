import Ably from "ably/promises";

export const GET = async (req:Request, res:Response) => {

 // Your application should perform some type of user 
 // authorization to validate that the user is allowed 
 // to receive a token before fulfilling the token request 
 // if (requesting_user.isAuthenticated) {

    const client = new Ably.Rest(process.env.ABLY_API_KEY as string);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: 'Random Client ID',
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
    return Response.json(tokenRequestData);

  //} else {
 // res.status(401).json({ 'error':'User is not authorized' })
  //}
};