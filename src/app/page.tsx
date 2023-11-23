'use client'
import { MagnifyingGlass } from "phosphor-react";
import { Tasks } from "./components/Tasks/tasks";
import AddFeather from "./components/addFeather/addFeather";
import { UseRedirect } from "./Hooks/useRedirect";
import { useEffect, useState } from "react";
import { Avatar } from "./components/Avatar/avatar";
import { useStore } from "zustand";
import { BearCounter } from "./components/Zustand/zustandtest";
import { Controls } from "./components/Zustand/ZustandIncrease";
import { Remove } from "./components/Zustand/deletebears";
import { useQuery } from "@tanstack/react-query";
import { api } from "./lib/axios";
import Image from 'next/image'
interface Tasks  {
  title: string
  Description: string
}
export default function TaskList() {

 
  
  const redirectTo = UseRedirect()

  const { isLoading, data } = useQuery<Tasks[]>({
    queryKey: ["Tasks"],
    queryFn: async () => {
      const response = await api.get(`/tasks`);
      console.log(response.data)
      return response.data;
    },
  });
 
  return (
    <div className="relative p-3.5">
      <div className="pb-4">
       <div className="flex justify-between items-center">
       <h1 className="text-header text-3xl font-bold font-mono space-y-1.5">
          Hello, Reinaldo
        </h1>
       
       
        <Avatar src={"https://avatars.githubusercontent.com/u/55931337?v=4"}   />
       </div>
        <span className="font-mono text-header text-sm font-medium">
          Check your tasks! 👇{" "}
        </span>
      </div>
      <div className="bg-gray-100 mb-5 rounded-md py-2.5 space-x-1 pl-5 gap flex items-center border border-transparent transition duration-200 hover:border-gray-400">
        <MagnifyingGlass color="#BCBCBC" size={22} />
        <input
          placeholder="Search..."
          className="w-full text-xl outline-none text-input-text bg-gray-100"
        />
      </div>
      {data?.length ? (
        <div className="space-y-5">
        {data?.map((task) => (
          <Tasks description={task.Description} title={task.title} key={task.title}/>
        ))}
        </div>
      ) : <div className="flex justify-center items-center flex-col">
         <Image
              src={"/images/image 2.png"}
              alt=""
              width={261}
              height={222}
            />
            <h2 className="text-header text-2xl text-center pt-6 font-bold font-mono space-y-1.5">
          Você ainda não possui tarefas! 
        </h2>
        </div>}

      <button className="fixed bottom-4 right-4 bg-header text-white rounded-full " onClick={() => redirectTo('/newtask')}>
        <div className="p-6 flex justify-center items-center">
          <AddFeather />
        </div>
      </button>
    </div>
  );
}
