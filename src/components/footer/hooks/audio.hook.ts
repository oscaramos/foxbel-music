// inspired from https://stackoverflow.com/a/47686478
import { useEffect, useState } from "react";

type Return = [
  boolean,
  {
    toggle: () => void;
    changeVolume: (newVolume: number) => void;
  }
];

type Props = {
  url: string;
};

export function useAudio({ url }: Props): Return {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  const toggle = () => setPlaying(!playing);

  const changeVolume = (newVolume: number) => {
    audio.volume = newVolume;
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, { toggle, changeVolume }];
}
