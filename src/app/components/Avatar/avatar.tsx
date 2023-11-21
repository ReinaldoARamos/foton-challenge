"use client";
import { UseRedirect } from "@/app/Hooks/useRedirect";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
interface AvatarProps {
  src: string;

}


export function Avatar({ src }: AvatarProps) {
  const redirectTo = UseRedirect();
  const [login, setLogin] = useState(true)
  function handleLogOut () {
   
   const newloginState  = !login
   setLogin(newloginState)
   console.log(newloginState)

  }
  return (
    <>
      {login ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div className="overflow-hidden rounded-full border border-gray-950">
              <img src={src} alt="" className="h-10 w-10 rounded-full" />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className=" data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade rounded-md bg-violet-50 p-[5px]"
              sideOffset={5}
            >
              <DropdownMenu.Item className="group p-1 text-red-400 hover:bg-red-50" onClick={() => handleLogOut()}>
               Sair
              </DropdownMenu.Item>
              
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
        <div
          className="text-task  transition duration-200 hover:font-bold"
          onClick={() => redirectTo("/login")}
        >
          Login
        </div>
      )}
    </>
  );
}
