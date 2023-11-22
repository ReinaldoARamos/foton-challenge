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

interface Tasks  {
  title: string
  description: string
}
export default function TaskList() {

  const [tasks, setNewTask] = useState<Tasks[]>([]);

  // Set the initial state in a useEffect to avoid infinite render
  useEffect(() => {
    const tasksArray: Tasks[] = [
      {
        title: 'Task 1',
        description: 'Description 1',
      },
      {
        title: 'Task 2',
        description: 'Description 2',
      },
      {
        title: 'Task 3',
        description: 'Description 3',
      },
      {
        title: 'Task 4',
        description: 'Description 24',
      },
      // Add more tasks as needed
    ];
  
    setNewTask(tasksArray);
  }, []); // Empty dependency array means it runs only once, similar to componentDidMount
  

 
  
  const redirectTo = UseRedirect()

  const { isLoading, data } = useQuery<Tasks>({
    queryKey: ["User"],
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
      <div className="space-y-5">
      {tasks.map((task) => (
        <Tasks description={task.description} title={task.title} key={task.title}/>
      ))}
      </div>
      {/* Fixed button */}
      <button className="fixed bottom-4 right-4 bg-header text-white rounded-full " onClick={() => redirectTo('/newtask')}>
        <div className="p-6 flex justify-center items-center">
          <AddFeather />
        </div>
      </button>
    </div>
  );
}
