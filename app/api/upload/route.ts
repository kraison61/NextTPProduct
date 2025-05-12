import { NextRequest, NextResponse } from 'next/server';
import { uploadToS3 } from '@/lib/s3';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await uploadToS3({
      fileBuffer: buffer,
      fileName: file.name,
      contentType: file.type,
    });

    return NextResponse.json({ message: 'Upload successful' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
