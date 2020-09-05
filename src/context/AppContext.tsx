import React, { ReactNode } from 'react'
import { HechiceroProps, PotionProps } from "types/index";
import avatars from "icons/avatars";
import potions from "icons/potions";

const initialData = {
  potionsStore: [
    {
      alias: "true-love",
      name: "True love!",
      description: "Con esta poci&oacute;n caer&aacute; rendido/a a tus pies.",
      color: "red",
      avatar: potions.love
    },
    {
      alias: "false-illusions",
      name: "False illusions",
      description: "Corromper&aacute; su alma.",
      color: "blue",
      avatar: potions.illusions
    },
    {
      alias: "fake-friends",
      name: "Fake friends",
      description: "Lastimar&aacute;s su simpat&iacute;a.",
      color: "green",
      avatar: potions.fakeFriends
    },
    {
      alias: "blessed-ignorance",
      name: "Blessed ignorance",
      description: "Acabar&aacute;s con su carrera.",
      color: "yellow",
      avatar: potions.ignorance
    },
    {
      alias: "defame",
      name: "Defame",
      description: "Acabar&aacute;s con su orgullo.",
      color: "gray",
      avatar: potions.defame
    }
  ],
  hechiceros: [
    {
      alias: "thor",
      name: "Thor",
      avatar: avatars.thor
    },
    {
      alias: "smurf",
      name: "Smurf",
      avatar: avatars.smurf
    },
    {
      alias: "wonder-woman",
      name: "Wonder Woman",
      avatar: avatars.wonderWoman
    },
    {
      alias: "wizard-original",
      name: "Wizard",
      avatar: avatars.wizardOriginal
    }
  ]
}

type TypeAppContext = {
  potionsStore: PotionProps[];
  hechiceros: HechiceroProps[];
};

const Context = React.createContext<TypeAppContext | undefined>(undefined)


export function AppContextProvider({ children }: { children: ReactNode }) {

  return <Context.Provider value={{
    potionsStore: initialData.potionsStore,
    hechiceros: initialData.hechiceros
  }}>
    {children}
  </Context.Provider>
}


export default Context