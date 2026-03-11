import type { Game } from '@/services/dtos/gamesDTO';
import React, { createContext, useState } from 'react';

export interface IGameProvider {
  children: React.ReactNode;
}

export interface IGameContext {
  randomGame: Game | null;
  setRandomGame: (game: Game | null) => void;
}

const GameContext = createContext<IGameContext | null>(null);

export function GameProvider({ children }: IGameProvider) {
  const [randomGame, setRandomGame] = useState<Game | null>(null);

  return (
    <GameContext.Provider value={{ randomGame, setRandomGame }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext };
