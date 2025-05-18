import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

function safeJson(obj: any): any {
  return JSON.parse(JSON.stringify(obj, (_, v) =>
    typeof v === 'bigint' ? v.toString() : v
  ))
}

export async function GET() {
  const services = await prisma.service_names.findMany()
  return NextResponse.json(safeJson(services))
}