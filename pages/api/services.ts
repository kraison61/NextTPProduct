// pages/api/services.ts
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const services = await prisma.service_names.findMany({
      select: {
        id: true,
        serviceName: true,
      },
      orderBy: {
        serviceName: 'asc',
      },
    })

    // แปลง BigInt → string
    const safeData = services.map(s => ({
      id: s.id.toString(),
      serviceName: s.serviceName,
    }))

    return res.status(200).json(safeData)
  } catch (error) {
    console.error('Error fetching services:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
