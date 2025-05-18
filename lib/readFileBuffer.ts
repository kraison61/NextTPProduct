// lib/readFileBuffer.ts
import fs from 'fs'

export function readFileBuffer(path: string) {
  return fs.readFileSync(path)
}
