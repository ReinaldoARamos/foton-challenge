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
  const [isDeleted, setIsDeleted] = useState(false);

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

  useEffect(() => {
    if (isDeleted) {
      // Add a delay before fading away and moving to the right
      setTimeout(() => {
        setIsDeleted(false); // Reset the state to reuse the component
      }, 1000); // Adjust the duration as needed
    }
  }, [isDeleted]);
  return (
    <div
      className={`${
        isDeleted ? 'slideLeftAndFade' : ''
      } bg-task px-4 py-4 rounded-md transition-transform`}
    >
      <div className="flex justify-between">
        <h1 className="pb-1.5 text-xl text-white font-bold">{title}</h1>
        <Trash
          size={24}
          className="text-red-700 cursor-pointer"
          onClick={() => HandleDelete(id)}
        />
      </div>
      <div className="text-white text-xs font-medium">{description}</div>
    </div>
  );
}
