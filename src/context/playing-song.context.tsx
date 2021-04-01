import React, { ReactNode, useState, createContext, useContext } from "react";

import { ISong } from "../services/songs/search";

type ChangeSongOptions = {
  startPlaying: boolean;
};

type Return = {
  song?: ISong;
  changeSong: (newSong: ISong, options?: ChangeSongOptions) => void;
  options: ChangeSongOptions;
};

const PlayingSongContext = createContext<Return | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const defaultOptions: ChangeSongOptions = {
  startPlaying: false,
};

export function PlayingSongProvider({ children }: Props) {
  const [song, setSong] = useState<ISong | undefined>(undefined);
  const [options, setOptions] = useState<ChangeSongOptions>(defaultOptions);

  const onChangeSong: Return["changeSong"] = (newSong, options) => {
    setSong(newSong);
    setOptions(options || defaultOptions);
  };

  return (
    <PlayingSongContext.Provider
      value={{
        song,
        changeSong: onChangeSong,
        options,
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
