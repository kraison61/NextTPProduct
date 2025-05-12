import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  region: process.env.MINIO_REGION!,
  endpoint: process.env.NEXT_PUBLIC_MINIO_ENDPOINT!,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!,
  },
});

export async function uploadToS3({
  fileBuffer,
  fileName,
  contentType,
}: {
  fileBuffer: Buffer;
  fileName: string;
  contentType: string;
}) {
  const command = new PutObjectCommand({
    Bucket: 'my-bucket',
    Key: fileName,
    Body: fileBuffer,
    ContentType: contentType || 'application/octet-stream',
  });

  return s3.send(command);
}
