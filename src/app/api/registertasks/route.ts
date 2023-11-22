import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateNewTaskSchema = z.object({
    Description: z.string().min(1).max(400),
    title: z.string().min(1).max(400),
    
  });

  
export async function POST(req: Request) {
   // const { Description, title } = CreateNewTaskSchema.parse(req.body);
    
    const json = await req.json();
     const newtask = await prisma.tasks.create({
        data: json
     })

     let json_response = {
        status: "success",
        data: {
            newtask,
        },
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }
  