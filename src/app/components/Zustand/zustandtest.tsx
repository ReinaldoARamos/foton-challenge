/* eslint-disable react/jsx-key */
import { useStore } from "@/app/Hooks/useStore"


export function BearCounter() {
    const bears = useStore((state) => state.tasksArray)
    return  <div>
        {bears.map((task) => (
       <div>{task.title}</div>
      ))}
    </div>
  }