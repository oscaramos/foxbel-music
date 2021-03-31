import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./song-card.styles.scss";

export function SongCard() {
  return (
    <div className="song-card">
      <div className="song-card__image-container">
        <img
          src="https://picsum.photos/200"
          alt="song-card-example"
          className="song-card__image"
        />
        <FontAwesomeIcon icon={faEllipsisV} className="song-card__menu" />
      </div>
      <div className="song-card__title">Song card title</div>
      <div className="song-card__artist">Song card artist</div>
    </div>
  );
}
