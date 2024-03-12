import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Resend } from "resend";
import multer from "multer";
import aws from "aws-sdk";
const upload = multer();

const s3Client = new S3Client({
  region: process.env.LOC,
  credentials: {
    accessKeyId: process.env.AK,
    secretAccessKey: process.env.SAK,
  },
});
const s3 = new aws.S3({
  accessKeyId: process.env.AK,
  secretAccessKey: process.env.SAK,
  region: process.env.LOC,
});

async function uploadFileToS3(fileBuffer, fileName) {
  try {
    const params = {
      Bucket: process.env.NAME,
      Key: `${fileName}`,
      Body: fileBuffer,
      ContentType: "audio/mpeg",
    };

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

    const { nume, scoala, cat_v, cat_d, cat_s, email, telefon, mesaj, check1 } =
      form;

    const muzica = formData.get("muzica");
    const buffer = await muzica.arrayBuffer();
    const fileName = `${scoala}${nume}${muzica.name}`;   
     const fileUrl = `https://${process.env.NAME}.s3.${process.env.LOC}.amazonaws.com/${fileName}`;

    // await uploadFileToS3(buffer, fileName);
    upload.single("muzica")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading file" });
      }
      const Sendbuffer = Buffer.from(buffer);

      console.log(req.muzica)
      // Upload the file to AWS S3
      const params = {
        Bucket: process.env.NAME,
        Key: `${fileName}`, // Specify the key (filename) for the file in S3
        Body: Sendbuffer, // Use the file buffer as the Body of the request
        ContentType:"audio/mpeg",
        // Specify the content type of the file
      };

      var options = {partSize: 3 * 1024 * 1024, queueSize: 6};

      s3.upload(params, options, function(err, data) {
        // console.log(err, data);
      });    
      // Return the file URL or any other relevant information
      // res.status(200).json({ fileUrl: data.Location });
    });

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

    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal error: ${error.message}`, {
      status: 500,
    });
  }
}
