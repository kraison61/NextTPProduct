//page/api/blogs/index.ts

import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const blogs = await prisma.blogs.findMany({
      include: {
        serviceName: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const safeJson = JSON.parse(
      JSON.stringify(blogs, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      )
    );

    return res.status(200).json(safeJson);
  }

  if (req.method === "POST") {
  try {
    const { title, description, content, image, serviceNameId } = req.body;

    if (!title || !description || !content || !image || !serviceNameId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newBlog = await prisma.blogs.create({
      data: {
        title,
        description,
        content,
        image, // ✅ ต้องใส่ image ตาม schema
        servicename_id: Number(serviceNameId),
      },
    });

    const safeJson = JSON.parse(
      JSON.stringify(newBlog, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      )
    );

    return res.status(201).json(safeJson);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create blog", error });
  }
}


  return res.status(405).json({ message: "Method Not Allowed" });
}
