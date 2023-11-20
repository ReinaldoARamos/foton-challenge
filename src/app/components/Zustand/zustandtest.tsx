import { useStore } from "@/app/Hooks/useStore"

export function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} around here...</h1>
  }