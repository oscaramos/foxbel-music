import { faEllipsisV, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ISong } from "../../../../../../services/songs/search";

import "./song-card.styles.scss";

type IProps = {
  song: ISong;
  onSelect: () => void;
  onPlay: () => void;
};

export function SongCard({ song, onSelect, onPlay }: IProps) {
  return (
    <div className="song-card">
      <div className="song-card__image-container">
        <img
          src={`${song.album.cover_medium}`}
          alt={`song-card-${song.id}`}
          className="song-card__image"
        />
        <FontAwesomeIcon icon={faEllipsisV} className="song-card__menu" />
        <FontAwesomeIcon
          icon={faPlay}
          className="song-card__play"
          size="2x"
          onClick={() => {
            onPlay();
            onSelect();
          }}
        />
      </div>
      <div className="song-card__details" onClick={() => onSelect()}>
        <div className="song-card__title">{song.title}</div>
        <div className="song-card__artist">{song.artist.name}</div>
      </div>
    </div>
  );
}
