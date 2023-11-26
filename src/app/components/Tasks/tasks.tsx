import { api } from "@/app/lib/axios";
import { Trash } from "phosphor-react";

interface TaskProps {
  id:string
  title: string
  description: string
}


async function HandleDelete(id : string) {
  try {
    console.log("deletando " + id);
    const response = await api.delete(`${id}`);
  

  } catch (error) {
    console.error("Validation error:", error);
  }
}



export function Tasks({description, title, id} : TaskProps) {
  return (
    <div className="bg-task px-4 py-4  rounded-md">
   
      <div className="flex justify-between">
      <h1 className="pb-1.5 text-xl text-white font-bold">{title}</h1>
      <Trash size={24} className="text-red-700" onClick={() => HandleDelete(id)}/>
      </div>
      <div className="text-white text-xs font-medium">
    {description}
      </div>
    </div>
  );
}
