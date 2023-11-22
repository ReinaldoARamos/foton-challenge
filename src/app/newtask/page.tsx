"use client";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Avatar } from "../components/Avatar/avatar";
import { api } from "../lib/axios";

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

  async function handleUpdateData(data: NewTaskData) {
    const response = await api.post(`registertasks/`, {
      Description,
      title
    });
    setFormData(response.data);

    reset();
    console.log("newTask:", data);
  }
  return (
    <form
      className="flex h-screen flex-col justify-between p-3.5"
      onSubmit={handleSubmit(handleUpdateData)}
    >
      <div className="h-full">
        <div className="flex items-center justify-between">
          <h1 className="space-y-1.5 font-mono text-3xl font-bold text-header">
            New Task
          </h1>
          <Avatar
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
          />
        </div>
        <span className="font-mono text-sm font-medium text-header">
          What do you want to do? 🤔
        </span>
        <div className="mt-6 space-y-5">
          <input
            placeholder="title"
            className="w-full rounded-md  border bg-input py-5 pl-4 shadow-none hover:border-gray-400 focus:outline-none"
            {...register("title")}
          />
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
