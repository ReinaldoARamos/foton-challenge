"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Tasks } from "./components/Tasks/tasks";
export default function TaskList() {
  return (
    <div className="p-3.5">
      <div className="pb-4">
        <h1 className="text-header text-3xl font-bold font-mono space-y-1.5">
          Hello, Reinaldo
        </h1>
        <span className="font-mono text-header text-sm font-medium">
          Check your tasks! 👇{" "}
        </span>
      </div>
      <div className="bg-gray-100 mb-5 rounded-md py-2.5 space-x-1 pl-5 gap flex items-center border border-transparent transition duration-200 hover:border-gray-400">
        <MagnifyingGlass color="#BCBCBC" size={22} />
        <input
          placeholder="Search..."
          className="w-full text-xl outline-none text-input-text"
        />
      </div>
      <div className="space-y-5">
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  );
}
