import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract data from the request body
    console.log(req.body);
    // Send the email using an email service (e.g., NodeMailer, SendGrid)
    // ...

    return res.status(200).json({ success: true });
  }

  // Handle any other HTTP methods
  return res.status(405).end(); // Method Not Allowed
};
