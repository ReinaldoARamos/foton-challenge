"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export default function NewTask() {
  
  return (
    <div className="p-3.5 flex flex-col h-screen justify-between">
      <div className="h-full">
        <h1 className="text-header text-3xl font-bold font-mono space-y-1.5">
          New Task
        </h1>
        <span className="font-mono text-header text-sm font-medium pb-6">
          What do you want to do? 🤔
        </span>
        <div className="space-y-5">
        <Input placeholder="title" />
        <textarea
          className=" resize-none outline-none border rounded-md hover:border-gray-400 w-full h-60 text-input-text pl-5 pt-5"
          placeholder="description "
        />
      </div>
      </div>
      
      <Button text="Add"/>
    </div>
  );
}
