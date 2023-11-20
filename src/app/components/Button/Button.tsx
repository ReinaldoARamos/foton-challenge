import { ButtonHTMLAttributes } from "react"

interface InputProps extends ButtonHTMLAttributes<HTMLInputElement>{
    text: string
}
export function Button({text, ...props} : InputProps)  {
    return (
        <button className="px-40 py-5 text-x mb-6 bg-task text-white font-bold w-full"> {text}</button>
    )
}