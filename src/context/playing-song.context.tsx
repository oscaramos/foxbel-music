import { Subject } from "rxjs";
import { useStateWithHistory } from "react-use";
import React, { createContext, ReactNode, useContext } from "react";

import { ISong } from "../services/songs/search";

export const startPlayingObservable = new Subject<void>();

type ChangeSongOptions = {
  startPlaying: boolean;
};

type Return = {
  song?: ISong;
  changeSong: (newSong: ISong, options?: ChangeSongOptions) => void;
  stateHistory: {
    back: () => void;
    forward: () => void;
  };
};

const PlayingSongContext = createContext<Return | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function PlayingSongProvider({ children }: Props) {
  const [song, setSong, { back, forward }] = useStateWithHistory<
    ISong | undefined
  >();

  const onChangeSong: Return["changeSong"] = (newSong, options) => {
    if (options?.startPlaying) {
      startPlayingObservable.next();
    }
    setSong(newSong);
  };

  return (
    <PlayingSongContext.Provider
      value={{
        song,
        changeSong: onChangeSong,
        stateHistory: {
          back,
          forward,
        },
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
