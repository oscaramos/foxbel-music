import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

import { usePlayingSong } from "../../../../context/playing-song.context";

import "./controls.styles.scss";

type Props = {
  playing: boolean;
  toggle: () => void;
};

export function Controls({ playing, toggle }: Props) {
  const { song } = usePlayingSong();

  if (!song) return null;

  return (
    <div className="controls">
      <FontAwesomeIcon
        icon={faStepBackward}
        className="controls__backward"
        size="lg"
      />
      <div className="controls__play-container" onClick={() => toggle()}>
        {playing ? (
          <FontAwesomeIcon icon={faPause} className="controls__play" />
        ) : (
          <FontAwesomeIcon icon={faPlay} className="controls__play" />
        )}
      </div>
      <FontAwesomeIcon
        icon={faStepForward}
        className="controls__forward"
        size="lg"
      />
    </div>
  );
}
