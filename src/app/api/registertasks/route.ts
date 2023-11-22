import { prisma } from "@/app/lib/prisma"
import { z } from "zod";

const CreateNewTaskSchema = z.object({
    Description: z.string().min(1).max(400),
    title: z.string().min(1).max(400),
    
  });

  
export async function POST(req: Request, res: Response) {
    const { Description, title } = CreateNewTaskSchema.parse(req.body);

   await prisma.tasks.create({
    data: {
        title : title,
        Description: Description
    }
   }) 
   return 
  }