"use client";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar/avatar";
import { api } from "../lib/axios";




export default function NewTask() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

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
        description,
      });
    
    } catch (error) {
      console.error("Validation error:", error);
    }
  }

  return (
    <form className="flex h-screen flex-col justify-between p-3.5" onSubmit={handleSubmit(handleCreateTask)}>
      <div className="h-full">
        <div className="flex justify-between items-center">
        <h1 className="space-y-1.5 font-mono text-3xl font-bold text-header">
          New Task
        </h1>
        <Avatar src={"https://avatars.githubusercontent.com/u/55931337?v=4"}   />
        </div>
        <span className="font-mono text-sm font-medium text-header">
          What do you want to do? 🤔
        </span>
        <div className="mt-6 space-y-5">
        <input placeholder="title" className="py-5 pl-4  border hover:border-gray-400 rounded-md bg-input w-full focus:outline-none shadow-none" onChange={handleTitle}/>
          <textarea
            className=" h-60 w-full resize-none rounded-md border bg-input pl-5 pt-5 outline-none hover:border-gray-400"
            placeholder="description "
            onChange={handleDescription}
          />
         <div>Titulo {title}</div>
         <div>Descricao {description}</div>
        </div>
      </div>
     

      <Button text="Add" type="submit" />
    </form>
  );
}
