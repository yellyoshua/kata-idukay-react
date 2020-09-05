import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import useGame from "hooks/useGame";
import AppContext from "context/AppContext"
import GameContext from "context/GameContext"
import "./index.css";
import Modal from "components/Modal";


type GameStatsType = {
  potionsDamage: number[];
  damageTotal: number;
  combinations: number[];
};


export default function StorePage(_props: RouteComponentProps) {
  const { potionsStore } = useContext(AppContext)!;
  const { potions, hechicero } = useContext(GameContext)!;
  const [gameStats, setGameStats] = useState<GameStatsType>({
    potionsDamage: [],
    damageTotal: 0,
    combinations: []
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const { setPotions, startFight } = useGame();

  const startFigthEvent = () => {
    setGameStats(startFight());
    setPotions([]);
    setShowModal(true);
  }

  const endFigthEvent = () => {
    setGameStats({ potionsDamage: [], damageTotal: 0, combinations: [] });
    setPotions([]);
    setShowModal(false);
  }

  return <div className="pagestore">
    <h1>Store of Potions</h1>
    <section>
      {
        potionsStore.map((potion, index) => (
          <div className="potion-card" key={index} onClick={() => {
            setPotions([...potions!, potion]);
          }}>
            <div className="underline" style={{ background: potion.color }} />
            <img src={potion.avatar} alt={potion.alias} />
            <h2>{potion.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: potion.description }} />
          </div>
        ))
      }
    </section>
    {
      Boolean(potions?.length) && (
        <div className="pagestore-go-attack">
          <p>{potions?.length}</p>
          <strong>{potions?.length === 1 ? "Potion" : "Potions"}</strong>
          <button onClick={startFigthEvent}>Attack!</button>
        </div>
      )
    }
    <Modal isOpen={showModal} onClose={endFigthEvent}>
      <div>
        {
          hechicero && (
            <div style={{ margin: "0 auto" }} className="hechicero-card">
              <img src={hechicero.avatar} alt={hechicero.alias} />
              <h2>{hechicero.name}</h2>
            </div>
          )
        }
        <h2 className="txt-center">Result:</h2>
        <section>
          {Boolean(gameStats?.combinations.length) && gameStats.combinations.map((combination, index) => {
            return <p key={index}>
              Ataque {index + 1}: usar {combination} pociones distintas causan un {gameStats.potionsDamage[index]}% de daño.
            </p>
          })}
          <strong>Total: {hechicero && hechicero?.name} ha causado un {gameStats.damageTotal}% de daño.</strong>
        </section>
      </div>
    </Modal>
  </div>
}