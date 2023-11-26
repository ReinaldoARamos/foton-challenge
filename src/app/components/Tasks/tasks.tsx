import { Trash } from "phosphor-react";

interface TaskProps {
  title: string
  description: string
}

function HandleDelete() {
  console.log('Delete task')
}



export function Tasks({description, title} : TaskProps) {
  return (
    <div className="bg-task px-4 py-4  rounded-md">
   
      <div className="flex justify-between">
      <h1 className="pb-1.5 text-xl text-white font-bold">{title}</h1>
      <Trash size={24} className="text-red-700" onClick={HandleDelete}/>
      </div>
      <div className="text-white text-xs font-medium">
    {description}
      </div>
    </div>
  );
}
