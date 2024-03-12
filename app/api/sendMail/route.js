import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Resend } from "resend";

const s3Client = new S3Client({
  region: process.env.LOC,
  credentials: {
    accessKeyId: process.env.AK,
    secretAccessKey: process.env.SAK,
  }
});

async function uploadFileToS3(fileBuffer, fileName) {
  try {
    const params = {
      Bucket: process.env.NAME,
      Key: `${fileName}`,
      Body: fileBuffer,
      ContentType: "audio/mpeg"
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
  } catch (error) {
    throw new Error(`Failed to upload file to S3: ${error.message}`);
  }
}

const resendClient = new Resend(process.env.EMAIL);

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const jsonDataString = formData.get("jsonData");
    const form = JSON.parse(jsonDataString);

    const { nume, scoala, cat_v, cat_d, cat_s, email, telefon, mesaj, check1 } = form;

    const muzica = formData.get("muzica");
    if (muzica instanceof Blob) {
      const buffer = await muzica.arrayBuffer();
      const fileName = `${scoala}${nume}${muzica.name}`;
      await uploadFileToS3(buffer, fileName);
      const fileUrl = `https://${process.env.NAME}.s3.${process.env.LOC}.amazonaws.com/${fileName}`;

      const htmlContent = `
        <div>
          <h1>Detalii Inscriere</h1>
          <p><strong>Nume:</strong> ${nume}</p>
          <p><strong>Scoala:</strong> ${scoala}</p>
          <p><strong>Categoria de Varsta:</strong> ${cat_v}</p>
          <p><strong>Categoria Dans:</strong> ${cat_d}</p>
          <p><strong>Stil Dans:</strong> ${cat_s}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${telefon}</p>
          <p><strong>Mesaj:</strong> ${mesaj}</p>
          <p><strong>Check1:</strong> ${check1 ? "Yes" : "No"}</p>
          <p><strong>File URL:</strong> ${fileUrl}</p>
        </div>
      `;

      const { data, error } = await resendClient.emails.send({
        from: "onboarding@resend.dev",
        to: ["fitdanceoradea@gmail.com", "asociatia.stargym@gmail.com"],
        subject: "Detalii Inscriere",
        html: htmlContent,
      });

      if (error) {
        throw new Error(`Failed to send email: ${error.message}`);
      }

      return new NextResponse(
        JSON.stringify({ message: "Success" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new NextResponse("Internal error: No file uploaded", { status: 500 });
    }
  } catch (error) {
    return new NextResponse(`Internal error: ${error.message}`, { status: 500 });
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};