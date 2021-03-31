import { Volume } from "./components/volume/volume.component";
import { Controls } from "./components/controls/controls.component";
import { CurrentSong } from "./components/current-song/current-song.component";

import "./footer.styles.scss";

export function Footer() {
  return (
    <div className="footer">
      <CurrentSong />
      <Controls />
      <Volume />
    </div>
  );
}
