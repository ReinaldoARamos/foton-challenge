"use client";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Avatar } from "../components/Avatar/avatar";

const NewTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type NewTaskData = z.infer<typeof NewTaskSchema>;

export default function NewTask() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTaskData>({ resolver: zodResolver(NewTaskSchema) });

  const [formData, setFormData] = useState<NewTaskData | null>(null);

  function handleUpdateData(data: NewTaskData) {
    setFormData(data);
    reset();
    console.log("newTask:", data);


  }
  return (
    <form className="flex h-screen flex-col justify-between p-3.5" onSubmit={handleSubmit(handleUpdateData)}>
      <div className="h-full">
        <div className="flex justify-between items-center">
        <h1 className="space-y-1.5 font-mono text-3xl font-bold text-header">
          New Task
        </h1>
        <Avatar src={"https://avatars.githubusercontent.com/u/55931337?v=4"}    />
        </div>
        <span className="font-mono text-sm font-medium text-header">
          What do you want to do? 🤔
        </span>
        <div className="mt-6 space-y-5">
        <input placeholder="title" className="py-5 pl-4  border hover:border-gray-400 rounded-md bg-input w-full focus:outline-none shadow-none" {...register('title')}/>
          <textarea
            className=" h-60 w-full resize-none rounded-md border bg-input pl-5 pt-5 outline-none hover:border-gray-400"
            placeholder="description "
            {...register("description")} 
          />
        </div>
      </div>
     

      <Button text="Add" type="submit" />
    </form>
  );
}
