//page/api/images/index.ts

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const images = await prisma.image_uploads.findMany({
      include: { service: true },
      orderBy: { created_at: 'desc' },
    })

    const safeJson = JSON.parse(
      JSON.stringify(images, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return res.status(200).json(safeJson)
  }

  if (req.method === 'POST') {
    try {
      const { img_url, serviceId, location, worked_date } = req.body

      const newImage = await prisma.image_uploads.create({
        data: {
          img_url,
          serviceId: Number(serviceId),
          location,
          worked_date: new Date(worked_date),
        },
      })

      return res.status(201).json(newImage)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Failed to create image' })
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' })
}
