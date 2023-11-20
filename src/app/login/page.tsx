'use client'
import Image from "next/image";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { UseRedirect } from "../Hooks/useRedirect";

export default function Login() {
  const redirectTo = UseRedirect()
  return (
  
     <div className="px-3.5">
      <div className="flex flex-col  items-center  h-screen justify-between">
       
        <div className="space-y-5 pt-12">
       <div className="flex items-center justify-center pb-12"> <Image src={"/images/image 1.png"} alt="" width={261} height={222} /></div>
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />
          <span className="flex justify-end text-input-text font-semibold">
            No account?&nbsp;<div className="text-md text-task" onClick={() => redirectTo('/singup')}>Sing Up!</div>
          </span>
        </div>

       <Button text="Login"  redirect="/" />
  
      </div>
     
    </div>
 
  );
}
