// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { uploadFileToMinIO } from "@/lib/upload";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("images") as File[];

  const urls = await Promise.all(files.map(uploadFileToMinIO));

  return NextResponse.json({ urls });
}
