import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

export type VolumeStatusValues = "off" | "down" | "up" | "muted";

type Props = {
  status: VolumeStatusValues;
};

export function VolumeStatus({ status }: Props) {
  switch (status) {
    case "off":
      return (
        <FontAwesomeIcon
          icon={faVolumeOff}
          className="volume__status"
          size="2x"
        />
      );
    case "down":
      return (
        <FontAwesomeIcon
          icon={faVolumeDown}
          className="volume__status"
          size="2x"
        />
      );
    case "up":
      return (
        <FontAwesomeIcon
          icon={faVolumeUp}
          className="volume__status"
          size="2x"
        />
      );
    case "muted":
      return (
        <FontAwesomeIcon
          icon={faVolumeMute}
          className="volume__status"
          size="2x"
        />
      );
  }
}
