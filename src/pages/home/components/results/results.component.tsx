import { SongCard } from "./components/song-card/song-card.component";

import "./results.styles.scss";

export function Results() {
  return (
    <div className="results">
      <h5 className="results__title">Resultados</h5>
      <div className="results__list">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
}
