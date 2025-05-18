import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  if (req.method === 'GET') {
    const image = await prisma.image_uploads.findUnique({
      where: { id: BigInt(id) },
      include: { service: true },
    })

    if (!image) return res.status(404).json({ message: 'Not found' })

    const safeJson = JSON.parse(
      JSON.stringify(image, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return res.status(200).json(safeJson)
  }

  if (req.method === 'PUT') {
    try {
      const { img_url, serviceId, location, worked_date } = req.body

      const updated = await prisma.image_uploads.update({
        where: { id: BigInt(id) },
        data: {
          img_url,
          serviceId: Number(serviceId),
          location,
          worked_date: new Date(worked_date),
        },
      })

      return res.status(200).json(updated)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Failed to update image' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.image_uploads.delete({ where: { id: BigInt(id) } })
      return res.status(204).end()
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Failed to delete image' })
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' })
}
// Compare this snippet from pages/api/images/%5Bid%5D.ts: