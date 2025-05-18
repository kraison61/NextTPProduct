// lib/upload.ts
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./s3";
import { v4 as uuidv4 } from "uuid";
import { Readable } from "stream";





export function decodeURIComponentSafe(slug: string) {
    try {
      return decodeURIComponent(slug);
    } catch {
      return slug;
    }
  }
  
  export function slugToTitle(slug: string) {
    return slug.replace(/-/g, ' ');
  }