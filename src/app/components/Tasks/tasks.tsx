interface TaskProps {
  title: string
  description: string
}

export function Tasks({description, title} : TaskProps) {
  return (
    <div className="bg-task px-4 py-4  rounded-md">
      <h1 className="pb-1.5 text-xl text-white font-bold">{title}</h1>
      <div className="text-white text-xs font-medium">
    {description}
      </div>
    </div>
  );
}
