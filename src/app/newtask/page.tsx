"use client";
import { Button } from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar/avatar";
import { api } from "../lib/axios";
import { UseRedirect } from "../Hooks/useRedirect";

export default function NewTask() {
  const {
    handleSubmit,

    reset,
    formState: { isSubmitting },
  } = useForm();

  const [title, setTitle] = useState<string>();
  const [Description, setDescription] = useState<string>();
  const redirectTo = UseRedirect()

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setDescription(event.target.value);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setTitle(event.target.value);
  };
  async function handleCreateTask() {
    try {
      const response = await api.post(`registertasks`, {
        title,
        Description,
      });


    } catch (error) {
      console.error("Validation error:", error);
    }
    redirectTo('/')
  }

  return (
    <form
      className="flex h-screen flex-col justify-between p-3.5"
      onSubmit={handleSubmit(handleCreateTask)}
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
            onChange={handleTitle}
            required
          />
          <textarea
            className=" h-60 w-full resize-none rounded-md border bg-input pl-5 pt-5 outline-none hover:border-gray-400"
            placeholder="description "
            onChange={handleDescription}
            required
          />
        </div>
      </div>

      <Button text="Add" type="submit" disabled={isSubmitting} />
    </form>
  );
}
