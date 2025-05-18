// pages/api/blogs/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

function safeJson(obj: any): any {
  return JSON.parse(JSON.stringify(obj, (_, v) => (typeof v === 'bigint' ? v.toString() : v)))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' })
  }

  const blogId = BigInt(id)

  try {
    switch (req.method) {
      case 'GET': {
        const blog = await prisma.blogs.findUnique({
          where: { id: blogId },
          include: { serviceName: true },
        })
        if (!blog) return res.status(404).json({ error: 'Blog not found' })
        return res.status(200).json(safeJson(blog))
      }

      case 'PUT': {
        const { title, description, content, servicename_id } = req.body
        if (!title || !description || !content || !servicename_id) {
          return res.status(400).json({ error: 'Missing fields' })
        }

        const updated = await prisma.blogs.update({
          where: { id: blogId },
          data: {
            title,
            description,
            content,
            servicename_id: BigInt(servicename_id),
            updated_at: new Date(),
          },
        })

        return res.status(200).json(safeJson(updated))
      }

      case 'DELETE': {
        const blog = await prisma.blogs.findUnique({ where: { id: blogId } })
        if (!blog) return res.status(404).json({ error: 'Blog not found' })

        await prisma.blogs.delete({ where: { id: blogId } })
        return res.status(200).json({ success: true })
      }

      default:
        return res.status(405).json({ error: 'Method Not Allowed' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
