interface InputProps {
    placeholder: string
}
export function Input({placeholder} : InputProps)  {
    return (
        <input placeholder={placeholder} className="py-5 pl-4 bg-input w-full focus:outline-none"/>
    )
}