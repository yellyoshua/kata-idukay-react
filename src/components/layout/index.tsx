import React, { ReactNode, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useGame from "hooks/useGame";
import "./index.css";

const setTitle = (location: string) => {
  let title: string = "Page not found";

  const matchWithPath = (match: string) => {
    return Boolean(location.includes(match));
  }

  if (matchWithPath("store")) {
    title = "Potion shop";
  }
  if (location === "/") {
    title = "Select your hechicero/a";
  }
  document.title = title;
}

export default function StorePage(props: { children: ReactNode }) {
  const { hechicero, potions } = useGame();
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname;

  useEffect(function () {
    setTitle(pathname);
    if (Boolean(hechicero) && Boolean(pathname === "/")) {
      history.push("/store");
    }
    if (!hechicero && Boolean(pathname.includes("store"))) {
      history.push("/");
    }
  }, [pathname, hechicero, potions, history]);

  return <div className="layout">
    {props.children}
    <footer>Powered by <a href="https://github.com/yellyoshua">Yell</a></footer>
  </div>
}