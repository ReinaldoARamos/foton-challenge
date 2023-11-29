"use client";

import { useQuery } from "@tanstack/react-query";
//import { api } from "../../lib/axios";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { api } from "../lib/axios";
import { CaretLeft } from "phosphor-react";
import { UseRedirect } from "../Hooks/useRedirect";

interface TaskProps {
  title: string;
  Description: string;
}

export default function Task() {
  const redirectTo = UseRedirect();
  const pathname = usePathname();
  const { isLoading, data } = useQuery<TaskProps>({
    queryKey: ["Tasks"],
    queryFn: async () => {
      const response = await api.get(`tasks${pathname}`);
      console.log(response.data);
      return response.data;
    },
  });

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="px-4 pt-6 bg-task h-screen">
          <div className="pb-4" onClick={() => redirectTo('/')}><CaretLeft size={24} className="text-white" /></div>
          <div className="text-white font-bold text-3xl pb-12">{data?.title}</div>
          <div className="text-white font-bold text-sm">{data?.Description}</div>
        </div>
      )}
    </div>
  );
}
