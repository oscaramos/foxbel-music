import { SongCard } from "./components/song-card/song-card.component";

import { ISong } from "../../../../services/songs/search";

import { usePlayingSong } from "../../../../context/playing-song.context";

import "./results.styles.scss";

type Props = {
  songs: ISong[];
  onSelectSong: (newSong: ISong) => void;
};

export function Results({ songs, onSelectSong }: Props) {
  const { changeSong } = usePlayingSong();

  const handlePlaySong = (song: ISong) => {
    changeSong(song, { startPlaying: true });
  };

  return (
    <div className="results">
      <h5 className="results__title">Resultados</h5>
      <div className="results__list">
        {songs.length === 0
          ? "Ningún resultado"
          : songs.map((song) => (
              <SongCard
                key={`song-${song.id}`}
                song={song}
                onSelect={() => onSelectSong(song)}
                onPlay={() => handlePlaySong(song)}
              />
            ))}
      </div>
    </div>
  );
}
