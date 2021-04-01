import { usePlayingSong } from "../../../../context/playing-song.context";

import "./playing-song.scss";

export function PlayingSong() {
  const { song } = usePlayingSong();

  if (!song) return null;

  return (
    <div className="playing-song">
      <img
        src={song.album.cover_medium}
        alt="playing-song__image"
        className="playing-song__image"
      />
      <div className="playing-song__description">
        <div className="playing-song__song">{song.title}</div>
        <div className="playing-song__artist-album">
          <span>{song.artist.name}</span>
          <span> · </span>
          <span>{song.album.title}</span>
        </div>
      </div>
    </div>
  );
}
