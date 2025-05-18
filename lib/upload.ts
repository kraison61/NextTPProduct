// lib/upload.ts

import { uploadToS3 } from "./s3";
import { v4 as uuidv4 } from "uuid";

export async function uploadFileToMinIO(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = file.name.split(".").pop() || "bin";

  const key = `image/${uuidv4()}.${extension}`;
  const bucket = process.env.MINIO_BUCKET!;

  await uploadToS3({
    fileBuffer: buffer,
    fileName: key,
    contentType: file.type,
    bucket,
  });

  const endpoint = process.env.MINIO_ENDPOINT!.replace(/\/$/, "");
  return `${endpoint}/${bucket}/${key}`;
}
