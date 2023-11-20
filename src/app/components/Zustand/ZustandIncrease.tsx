import { useStore } from "@/app/Hooks/useStore"

export function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }