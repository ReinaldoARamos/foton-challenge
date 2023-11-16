import Image from "next/image";
import { Input } from "../components/Input/Input";

export default function Login() {
  return (
  
     <div className="px-3.5">
      <div className="flex flex-col  items-center  h-screen justify-between">
       
        <div className="space-y-5 pt-12">
       <div className="flex items-center justify-center pb-12"> <Image src={"/images/image 1.png"} alt="" width={261} height={222} /></div>
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />
          <span className="flex justify-end text-input-text font-semibold">
            No account?&nbsp;<div className="text-md text-task">Sing Up!</div>
          </span>
        </div>
        <button className="px-40 py-5 mb-6 bg-task text-white font-bold"> Login</button>
      </div>
     
    </div>
 
  );
}
