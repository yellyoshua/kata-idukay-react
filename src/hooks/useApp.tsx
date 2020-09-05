import { useContext, useCallback } from "react";
import AppContext from "context/AppContext";

export default function useApp() {
  const { hechiceros, potionsStore } = useContext(AppContext)!;

  const findHechicero = useCallback((alias: string) => {
    return hechiceros.find((hechicero) => (hechicero.alias === alias));
  }, [hechiceros]);

  const findPotion = useCallback((alias: string) => {
    return potionsStore.find((potion) => (potion.alias === alias));
  }, [potionsStore]);


  return { findHechicero, findPotion };
}