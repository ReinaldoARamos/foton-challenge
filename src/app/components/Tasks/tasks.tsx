"use client";
import { api } from "@/app/lib/axios";
import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { UseRedirect } from "@/app/Hooks/useRedirect";

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

export function Tasks({ description, title, id }: TaskProps) {
  const [deleteTriggered, setDeleteTriggered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  async function HandleDelete(id: string) {
    try {
      console.log("deletando " + id);
      const response = await api.delete(`${id}`);
      setDeleteTriggered(true);
    } catch (error) {
      console.error("Validation error:", error);
    }
  }
  const redirectTo = UseRedirect();

  useEffect(() => {
    if (deleteTriggered) {
      window.location.reload();
    }
  }, [deleteTriggered]);

  return (
    <div
      className={`flex items-center  gap-3 rounded-md  bg-task px-4 py-4  ${
        isChecked ? "line-through opacity-90" : ""
      }`}
    >
      <Checkbox.Root
        checked={isChecked}
        //@ts-ignore
        onCheckedChange={(state) => setIsChecked(state)}
        className="hover:bg-violet3 flex h-6 w-6 appearance-none items-center justify-center rounded-full  bg-white "
      >
        <Checkbox.Indicator className="flex items-center text-task">
          <CheckIcon size={16} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div
        className="flex w-full flex-col  "
        onClick={() => redirectTo(`${id}`)}
      >
        <div className=" flex items-center justify-between">
          <h1
            className={`pb-1.5 text-xl font-bold ${
              isChecked ? "text-white  line-through opacity-90 " : "text-white"
            }`}
          >
            {title}
          </h1>
        </div>
        <div className={`text-xs font-medium text-white  `}>{description}</div>
      </div>
      <Trash
        size={24}
        className="cursor-pointer text-red-700"
        onClick={() => HandleDelete(id)}
      />
    </div>
  );
}
