'use client'
import { UseRedirect } from "@/app/Hooks/useRedirect";

/* eslint-disable @next/next/no-img-element */
interface AvatarProps {
  src: string;
 isLoggedIn?: boolean;
}
export function Avatar({ src, isLoggedIn }: AvatarProps ) {
  const redirectTo = UseRedirect()
  return (
    <>
      {isLoggedIn ? (
        <div className="overflow-hidden rounded-full border border-gray-950">
          <img
            src={src}
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
      ) : (
        <div className="text-task  hover:font-bold transition duration-200" onClick={() => redirectTo('/login')}>Login</div>
      )}
    </>
  );
}
