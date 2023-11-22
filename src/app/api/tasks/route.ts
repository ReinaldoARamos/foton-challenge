import { prisma } from "@/app/lib/prisma"

export async function GET(req: Request, res: Response){
    const tasks = await prisma.tasks.findMany()

   
    return Response.json( tasks )
  }