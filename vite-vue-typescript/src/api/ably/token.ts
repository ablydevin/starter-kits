import Ably from "ably/promises";
import { Request, Response } from 'express';

export const GET = async (req:Request, res:Response) => {

 // Your application should perform some type of user 
 // authorization to validate that the user is allowed 
 // to receive a token before fulfilling the token request 
 // if (requesting_user.isAuthenticated) {

    const client = new Ably.Rest(import.meta.env.VITE_ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: 'Random Client ID',
    });
    console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
    return res.json(tokenRequestData);

  //} else {
 // res.status(401).json({ 'error':'User is not authorized' })
  //}
};