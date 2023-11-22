import { prisma } from "@/app/lib/prisma"

export async function GET() {
    const data = await prisma.tasks.findMany()

   
    return Response.json( data )
  }