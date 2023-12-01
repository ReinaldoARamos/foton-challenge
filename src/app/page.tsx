"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Tasks } from "./components/Tasks/tasks";
import AddFeather from "./components/addFeather/addFeather";
import { UseRedirect } from "./Hooks/useRedirect";
import { Avatar } from "./components/Avatar/avatar";
import { useQuery } from "@tanstack/react-query";
import { api } from "./lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Tasks {
  id: string;
  title: string;
  Description: string;
}
export default function TaskList() {
  const [search, setSearch] = useState<string>("");
  //const [searching, setSearching] = useState<boolean>(false)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setSearch(newText);
    // console.log(newText)
  };

  function Search() {
    console.log(search);
  }
  const redirectTo = UseRedirect();

  const { isLoading, data } = useQuery<Tasks[] | null>({
    queryKey: ["Tasks"],
    queryFn: async () => {
      const response = await api.get(`/tasks`);
      console.log(response.data);
      return response.data;
    },
  });
  /*
  const filteredTasks = data?.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.Description.toLowerCase().includes(search.toLowerCase())
  );

*/

  const filteredTasks = data?.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.Description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative p-3.5">
      <div className="pb-4">
        <div className="flex items-center justify-between">
          <h1 className="space-y-1.5 font-mono text-3xl font-bold text-header">
            Hello, Reinaldo
          </h1>

          <Avatar
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
          />
        </div>
        <span className="font-mono text-sm font-medium text-header">
          Check your tasks! 👇{" "}
        </span>
      </div>
      <div className="gap mb-5 flex items-center space-x-1 rounded-md border border-transparent bg-gray-100 py-2.5 pl-5 transition duration-200 hover:border-gray-400">
        <MagnifyingGlass color="#BCBCBC" size={22} />
        <input
          placeholder="Search..."
          className="w-full bg-gray-100 text-xl text-input-text outline-none"
          onChange={handleSearch}
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : search === "" ? (
        <div className="space-y-5">
          {data?.map((task) => (
            <Tasks
              description={task.Description}
              title={task.title}
              key={task.title}
              id={task.id}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
        {filteredTasks?.map((task) => (
         <Tasks
           description={task.Description}
           title={task.title}
           key={task.title}
           id={task.id}
           
         />
       ))}
     </div>
      )}

      <button
        className="fixed bottom-4 right-4 rounded-full bg-header text-white "
        onClick={() => redirectTo("/newtask")}
      >
        <div className="flex items-center justify-center p-6">
          <AddFeather />
        </div>
      </button>
    </div>
  );
}

/*
data?.length ? (
        <div className="space-y-5">
           {data?.map((task) => (
            <Tasks
              description={task.Description}
              title={task.title}
              key={task.title}
              id={task.id}
              
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src={"/images/image 2.png"} alt="" width={261} height={222} />
          <h2 className="space-y-1.5 pt-6 text-center font-mono text-2xl font-bold text-header">
            Você ainda não possui tarefas!
          </h2>
        </div>
      )
*/
