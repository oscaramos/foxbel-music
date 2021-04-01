import { faEllipsisH, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../../../../components/ui/button/button.component";

import { ISong } from "../../../../services/songs/search";

import { usePlayingSong } from "../../../../context/playing-song.context";

import "./preview-song.styles.scss";

type Props = {
  song: ISong;
};

export function PreviewSong({ song }: Props) {
  const { changeSong } = usePlayingSong();

  const handleClickPlay = () => {
    changeSong(song, { startPlaying: true });
  };

  return (
    <div className="preview-song">
      <div className="preview-song__image-container">
        <img
          src={song.album.cover_big}
          alt="song-cover"
          className="preview-song__image"
        />

        <FontAwesomeIcon
          icon={faPlay}
          className="preview-song__play"
          color="white"
          size="4x"
          onClick={handleClickPlay}
        />
      </div>

      <div className="preview-song__right-side">
        <div className="preview-song__details">
          <div className="preview-song__song-name">{song.title}</div>
          <div>
            <span className="preview-song__album-name">{song.album.title}</span>
            <span className="preview-song__followers-count">
              1000 seguidores
            </span>
          </div>
          <p className="preview-song__description">
            Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo
            de 1988), conocida simplemente como Adele, es una cantante,
            compositora
          </p>
        </div>

        <div className="preview-song__actions">
          <Button onClick={() => changeSong(song)}>Reproducir</Button>
          <Button variant="outline">Seguir</Button>
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="preview-song__menu"
            color="white"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
