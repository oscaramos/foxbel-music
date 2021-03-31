import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ISong } from "../../../../../../services/songs/search";

import "./song-card.styles.scss";

type IProps = {
  song: ISong;
};

export function SongCard({ song }: IProps) {
  return (
    <div className="song-card">
      <div className="song-card__image-container">
        <img
          src={`${song.album.cover_medium}`}
          alt={`song-card-${song.id}`}
          className="song-card__image"
        />
        <FontAwesomeIcon icon={faEllipsisV} className="song-card__menu" />
      </div>
      <div className="song-card__title">{song.title}</div>
      <div className="song-card__artist">{song.artist.name}</div>
    </div>
  );
}
