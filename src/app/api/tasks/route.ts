import { prisma } from "@/app/lib/prisma"

export async function GET() {
    const tasks = await prisma.tasks.findMany()

   
    return Response.json( tasks )
  }