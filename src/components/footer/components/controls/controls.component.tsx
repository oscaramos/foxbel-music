import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

import "./controls.styles.scss";

export function Controls() {
  return (
    <div className="controls">
      <FontAwesomeIcon
        icon={faStepBackward}
        className="controls__backward"
        size="lg"
      />
      <div className="controls__play-container">
        <FontAwesomeIcon icon={faPlay} className="controls__play" />
      </div>
      <FontAwesomeIcon
        icon={faStepForward}
        className="controls__forward"
        size="lg"
      />
    </div>
  );
}
