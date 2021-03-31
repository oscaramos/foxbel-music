import "./current-song.styles.scss";

export function CurrentSong() {
  return (
    <div className="current-song">
      <img
        src="https://picsum.photos/100"
        alt="current-song__image"
        className="current-song__image"
      />
      <div className="current-song__description">
        <div className="current-song__song">Canción</div>
        <div className="current-song__artist-album">Artista - Album</div>
      </div>
    </div>
  );
}
