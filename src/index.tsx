import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AppContextProvider } from "context/AppContext";
import { GameContextProvider } from "context/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

