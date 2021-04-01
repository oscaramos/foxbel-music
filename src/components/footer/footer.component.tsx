import { Volume } from "./components/volume/volume.component";
import { Controls } from "./components/controls/controls.component";
import { PlayingSong } from "./components/playing-song/playing-song.component";

import { usePlayingSong } from "../../context/playing-song.context";

import "./footer.styles.scss";

export function Footer() {
  const { song } = usePlayingSong();

  if (!song) {
    return null;
  }

  return (
    <div className="footer">
      <PlayingSong />
      <Controls />
      <Volume />
    </div>
  );
}
