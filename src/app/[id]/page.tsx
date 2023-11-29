'use client'

import { useQuery } from "@tanstack/react-query";
//import { api } from "../../lib/axios";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { api } from "../lib/axios";

interface TaskProps {
    title: string
    Description: string
}
export default function Task() {
    const pathname = usePathname()
    const { isLoading, data } = useQuery<TaskProps>({
        queryKey: ["Tasks"],
        queryFn: async () => {
          const response = await api.get(`tasks${pathname}`);
          console.log(response.data);
          return response.data;
        },
      });
   
 
    console.log(data)
    return (
       <div>
         <div>
               {data?.title}
        </div>
        <div>
               {data?.Description}
        </div>
       </div>
    )
}