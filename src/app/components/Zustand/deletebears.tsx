import { useStore } from "@/app/Hooks/useStore"

export function Remove() {
    const removeallbears = useStore((state) => state.removeAllBears)
    return <button onClick={removeallbears}>Out</button>
  }