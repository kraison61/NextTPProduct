// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import multer from 'multer';
import { Readable } from 'stream';
import { promisify } from 'util';

// Multer middleware (ทำงานแยกจาก Next.js ปกติ ต้องใช้ helper)
const storage = multer.memoryStorage();
const upload = multer({ storage });
const runMiddleware = promisify(upload.single('file'));

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const s3 = new S3Client({
    region: process.env.MINIO_REGION!,
    endpoint: process.env.NEXT_PUBLIC_MINIO_ENDPOINT!, // URL MinIO ของคุณ
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.MINIO_ACCESS_KEY!,
      secretAccessKey: process.env.MINIO_SECRET_KEY!,
    },
  });

  const command = new PutObjectCommand({
    Bucket: 'my-bucket',
    Key: file.name,
    Body: buffer,
    ContentType: file.type || 'application/octet-stream',
  });

  try {
    await s3.send(command);
    return NextResponse.json({ message: 'Upload successful' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
