import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // Extract data from the request body
     const body = await req.body
     console.log(body);

    // Send the email using an email service (e.g., NodeMailer, SendGrid)
    // ...

    // return res.status(200).json({ success: true });
  

  // Handle any other HTTP methods
  return new NextResponse("Internal error", { status: 500 });
};
