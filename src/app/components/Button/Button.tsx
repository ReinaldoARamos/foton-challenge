import { UseRedirect } from "@/app/Hooks/useRedirect"
import { ButtonHTMLAttributes } from "react"

interface InputProps extends ButtonHTMLAttributes<HTMLInputElement>{
    text: string
    redirect?: string

}
export function Button({text, redirect="", ...props} : InputProps)  {
    const redirectTo = UseRedirect()
    return (
        <button onClick={() => redirectTo(redirect)} className="px-40 py-5 text-x mb-6 bg-task text-white font-bold w-full"> {text}</button>
    )
}