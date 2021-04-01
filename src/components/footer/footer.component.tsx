import { useEffect } from "react";
import { Volume } from "./components/volume/volume.component";
import { Controls } from "./components/controls/controls.component";
import { PlayingSong } from "./components/playing-song/playing-song.component";

import { useAudio } from "./hooks/audio.hook";

import { usePlayingSong } from "../../context/playing-song.context";

import "./footer.styles.scss";

export function Footer() {
  const { song, options } = usePlayingSong();

  const [playing, { toggle, changeVolume }] = useAudio({
    url: song?.preview ?? "",
  });

  useEffect(() => {
    if (options.startPlaying && !playing) {
      toggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song, options.startPlaying, toggle]);

  if (!song) {
    return null;
  }

  const handleChangeVolume = (componentVolume: number) => {
    // componentVolume is between [0,100]
    // audioVolume is between [0,1]
    const audioVolume = componentVolume / 100;
    changeVolume(audioVolume);
  };

  return (
    <footer className="footer">
      <PlayingSong song={song} />
      <Controls playing={playing} toggle={toggle} />
      <Volume onChangeVolume={handleChangeVolume} />
    </footer>
  );
}
