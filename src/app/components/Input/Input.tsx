import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLButtonElement>{
    placeholder: string
  
}
export function Input({placeholder,  ...props} : InputProps)  {
    return (
        <input placeholder={placeholder} className="py-5 pl-4  border hover:border-gray-400 rounded-md bg-input w-full focus:outline-none shadow-none"/>

    )
}