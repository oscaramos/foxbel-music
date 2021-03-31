import { useEffect, useState } from "react";

import { Form } from "react-bootstrap";

import {
  VolumeStatusValues,
  VolumeStatus,
} from "./components/volume-status/volume-status.component";

import "./volume.styles.scss";

export function Volume() {
  const [volume, setVolume] = useState(50);
  const [status, setStatus] = useState<VolumeStatusValues>("down");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (muted) {
      setStatus("muted");
    } else if (volume === 0) {
      setStatus("off");
    } else if (volume < 50) {
      setStatus("down");
    } else {
      setStatus("up");
    }
  }, [volume, muted]);

  const toggleMuted = () => {
    setMuted((prev) => !prev);
  };

  return (
    <div className="volume">
      <div className="volume__range-container">
        <Form>
          <Form.Control
            type="range"
            custom
            value={volume}
            min="0"
            max="100"
            step="1"
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </Form>
      </div>
      <div className="volume__status-container" onClick={toggleMuted}>
        <VolumeStatus status={status} />
      </div>
    </div>
  );
}
