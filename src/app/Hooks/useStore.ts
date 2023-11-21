import { create } from 'zustand'


interface stateProps {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}


interface Tasks  {
    title: string
    description: string
  }
  
export const useStore = create((set) => ({
      tasksArray :  [
        {
          title: 'Task 1',
          description: 'Description 1',
        },
        {
          title: 'Task 2',
          description: 'Description 2',
        },
        {
          title: 'Task 3',
          description: 'Description 3',
        },
        {
          title: 'Task 4',
          description: 'Description 24',
        },
        // Add more tasks as needed
      ],
  increasePopulation: () => set(({bears, increasePopulation, removeAllBears} : stateProps ) => ({ bears: bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))