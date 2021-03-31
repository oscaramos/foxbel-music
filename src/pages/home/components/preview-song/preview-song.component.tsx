import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../../../components/ui/button/button.component";

import "./preview-song.styles.scss";

export function PreviewSong() {
  return (
    <div className="preview-song">
      <img
        src="https://picsum.photos/200"
        alt=""
        className="preview-song__image"
      />

      <div className="preview-song__right-side">
        <div className="preview-song__details">
          <div className="preview-song__song-name">Song Name</div>
          <div>
            <span className="preview-song__album-name">Album name</span>
            <span className="preview-song__followers-count">
              Followers count
            </span>
          </div>
          <p className="preview-song__description">
            Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo
            de 1988), conocida simplemente como Adele, es una cantante,
            compositora
          </p>
        </div>

        <div className="preview-song__actions">
          <Button>Reproducir</Button>
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
