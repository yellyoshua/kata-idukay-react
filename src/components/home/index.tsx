import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import useGame from "hooks/useGame";
import AppContext from "context/AppContext"
import "./index.css";

export default function HomePage(_props: RouteComponentProps) {
  const { hechiceros } = useContext(AppContext)!;
  const { setHechicero } = useGame();

  return <div className="homepage">
    <h1 className="txt-center">Select your player</h1>
    <section>
      {
        hechiceros.map((hechicero, index) => (
          <div className="hechicero-card" key={index} onClick={(e) => {
            setHechicero(hechicero);
          }}>
            <img src={hechicero.avatar} alt={hechicero.alias} />
            <h2>{hechicero.name}</h2>
          </div>
        ))
      }
    </section>
  </div>
}