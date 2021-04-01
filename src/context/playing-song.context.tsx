import React, { ReactNode, useState, createContext, useContext } from "react";

import { ISong } from "../services/songs/search";

type Return = {
  song?: ISong;
  changeSong: (newSong: ISong) => void;
};

const PlayingSongContext = createContext<Return | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function PlayingSongProvider({ children }: Props) {
  const [song, setSong] = useState<ISong | undefined>(undefined);

  const onChangeSong = (newSong: ISong) => {
    setSong(newSong);
  };

  return (
    <PlayingSongContext.Provider
      value={{
        song,
        changeSong: onChangeSong,
      }}
    >
      {children}
    </PlayingSongContext.Provider>
  );
}

export function usePlayingSong() {
  const context = useContext(PlayingSongContext);
  if (context === undefined) {
    throw new Error("usePlayingSong must be within a PlayingSongProvider");
  }
  return context;
}
