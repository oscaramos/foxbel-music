import { useEffect } from "react";
import { Volume } from "./components/volume/volume.component";
import { Controls } from "./components/controls/controls.component";
import { PlayingSong } from "./components/playing-song/playing-song.component";

import { useAudio } from "./hooks/audio.hook";

import {
  startPlayingObservable,
  usePlayingSong,
} from "../../context/playing-song.context";

import "./footer.styles.scss";

export function Footer() {
  const {
    song,
    stateHistory: { back, forward },
  } = usePlayingSong();

  const [playing, { toggle, changeVolume }] = useAudio({
    url: song?.preview ?? "",
  });

  useEffect(() => {
    const subscription = startPlayingObservable.subscribe(() => {
      if (!playing) {
        toggle();
      }
    });
    return () => subscription.unsubscribe();
  }, [playing, toggle]);

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
      <Controls
        playing={playing}
        toggle={toggle}
        onBack={back}
        onForward={forward}
      />
      <Volume onChangeVolume={handleChangeVolume} />
    </footer>
  );
}
