// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from "next/server";
// import { Email } from '../../../components/Email';

import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
interface EmailTemplateProps {
  cat_v: string;
  nume: any;
  cat_d: any;
  cat_s: any;
  telefon: any;
  email: any;
  mesaj: any;
}
const resend = new Resend(process.env.EMAIL);

export async function POST(req: NextRequest, res: NextApiResponse) {
  let data = await req.formData();

  const jsonDataString = data.get("jsonData") as string;
  const form = JSON.parse(jsonDataString);

  // let body = Object.fromEntries(data);

  const nume = form.nume;
  const scoala = form.scoala;
  const categoriaVarsta = form.cat_v;
  const categoriaDans = form.cat_d;
  const stilDans = form.cat_s;
  const email = form.email;
  const telefon = form.telefon;
  const mesaj = form.mesaj;
  const check1 = form.check1;
  const muzicaPath = form.muzica;

  const htmlContent = `
  <div>
    <h1>Detalii Inscriere</h1>
    <p><strong>Nume:</strong> ${nume}</p>
    <p><strong>Scoala:</strong> ${scoala}</p>
    <p><strong>Categoria de Varsta:</strong> ${categoriaVarsta}</p>
    <p><strong>Categoria Dans:</strong> ${categoriaDans}</p>
    <p><strong>Stil Dans:</strong> ${stilDans}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${telefon}</p>
    <p><strong>Mesaj:</strong> ${mesaj}</p>
    <p><strong>Check1:</strong> ${check1 ? "Yes" : "No"}</p>
  </div>
`;

  // const file = data.get("muzica") as Blob | null;
  const muzica = data.get("muzica");
  if (muzica instanceof Blob) {
    const buffer = await muzica.arrayBuffer();
    // Further processing with buffer

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["fitdanceoradea@gmail.com","ripan.ionut.web@gmail.com"],
      subject: "Hello World",
      html: htmlContent,
      attachments: [
        {
          filename: "muzica.mp3",
          content: Buffer.from(buffer),
        },
      ],
    });
    
    return new NextResponse(
      JSON.stringify({ message: "Success" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  
  return new NextResponse("Internal error", { status: 500 });
}
