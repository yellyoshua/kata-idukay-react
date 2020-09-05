import React, { ReactNode, useState } from 'react'
import { HechiceroProps, PotionProps } from "types/index";

const initialData = {
  hechicero: null,
  potions: [],
}

type TypeGameContext = {
  potions: PotionProps[] | null;
  hechicero: HechiceroProps | null;
  setPotions: React.Dispatch<React.SetStateAction<any>>;
  setHechicero: React.Dispatch<React.SetStateAction<any>>;
};

const Context = React.createContext<TypeGameContext | undefined>(undefined)


export function GameContextProvider({ children }: { children: ReactNode }) {
  const [hechicero, setHechicero] = useState(initialData.hechicero);
  const [potions, setPotions] = useState(initialData.potions);

  return <Context.Provider value={{
    potions,
    hechicero,
    setPotions,
    setHechicero
  }}>
    {children}
  </Context.Provider>
}


export default Context