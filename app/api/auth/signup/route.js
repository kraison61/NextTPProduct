import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const newUser = await prisma.users.create({
        data:{
            name,
            email,
            password: hashedPassword
            // ไม่ใส่ created_at, updated_at (จะเป็น null ตาม schema)
        }
    });
    
    return Response.json({
      message: 'create user ok',
      data:{
        newUser: {
          id: newUser.id.toString(),
          name: newUser.name,
          email: newUser.email,
          created_at: newUser.created_at,
          updated_at: newUser.updated_at
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      {
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}