import { api } from "@/app/lib/axios";
import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";

interface TaskProps {
  id:string
  title: string
  description: string
}





export function Tasks({description, title, id} : TaskProps) {
  const [deleteTriggered, setDeleteTriggered] = useState(false);

  async function HandleDelete(id : string) {
    try {
      console.log("deletando " + id);
      const response = await api.delete(`${id}`);
      setDeleteTriggered(true);
  
    } catch (error) {
      console.error("Validation error:", error);
    }
  }
  
  useEffect(() => {
    if (deleteTriggered) {
      // Reload the page when delete is triggered
      window.location.reload();
    }
  }, [deleteTriggered]);
  
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
