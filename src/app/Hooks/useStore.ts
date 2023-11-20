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
  bears: 0,
  increasePopulation: () => set(({bears, increasePopulation, removeAllBears} : stateProps ) => ({ bears: bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))