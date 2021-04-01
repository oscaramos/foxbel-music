import { useEffect, useState } from "react";

import { Form } from "react-bootstrap";

import {
  VolumeStatusValues,
  VolumeStatus,
} from "./components/volume-status/volume-status.component";

import "./volume.styles.scss";

type Props = {
  onChangeVolume: (newVolume: number) => void;
};

export function Volume({ onChangeVolume }: Props) {
  const [volume, setVolume] = useState(50);
  const [status, setStatus] = useState<VolumeStatusValues>("down");
  const [muted, setMuted] = useState(false);

  const toggleMuted = () => {
    setMuted((prev) => !prev);
  };

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

  useEffect(() => {
    if (muted) {
      onChangeVolume(0);
    } else {
      onChangeVolume(volume);
    }
  }, [muted, volume, onChangeVolume]);

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
