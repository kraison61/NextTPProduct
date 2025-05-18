// pages/api/images/upload.ts
import formidable from "formidable";
import fs from "fs/promises";
import { uploadToS3 } from "@/lib/s3";
import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Form parse error", err });

    try {
      const { serviceId, location, worked_date } = fields;
      const uploadedFiles = Array.isArray(files.image)
        ? files.image
        : [files.image];

      const results = [];

      for (const file of uploadedFiles) {
        if (!file || !file.filepath) {
          return res.status(400).json({ message: "File not found" });
        }
        const fileBuffer = await fs.readFile(file.filepath);
        const extension = file.originalFilename?.split(".").pop() || "webp";
        const fileName = `image/services/${crypto.randomUUID()}.${extension}`;

        await uploadToS3({
          fileBuffer,
          fileName,
          contentType: file.mimetype || "image/jpeg",
           bucket: process.env.MINIO_BUCKET!,
        });

        // const fileUrl = `${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/my-bucket/${fileName}`;

        const created = await prisma.image_uploads.create({
          data: {
            // img_url: fileUrl,
            img_url: fileName,
            serviceId: Number(serviceId),
            location: String(location),
            worked_date: new Date(String(worked_date)),
          },
        });

        results.push(created);
      }
      const safeJson = JSON.parse(
        JSON.stringify(results, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        )
      );

      res.status(201).json({ uploaded: safeJson });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ message: "Upload failed", error });
    }
  });
}
