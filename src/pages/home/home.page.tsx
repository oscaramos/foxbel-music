import { useState } from "react";
import { Container } from "react-bootstrap";

import { Header } from "./components/header/header.component";
import { Results } from "./components/results/results.component";
import { Loader } from "../../components/ui/loader/loader.component";
import { PreviewSong } from "./components/preview-song/preview-song.component";

import { ISong } from "../../services/songs/search";
import { useSearch } from "../../services/songs/search.hook";

import "./home.page.scss";

function HomePage() {
  const [keyword, setKeyword] = useState("we");

  const { songs } = useSearch({ keyword });

  const [selectedSong, setSelectedSong] = useState<ISong | undefined>(
    undefined
  );

  return (
    <Container className="homepage-container">
      <Header keyword={keyword} setKeyword={setKeyword} />

      {selectedSong ? <PreviewSong song={selectedSong} /> : null}

      {!songs ? (
        <Loader center />
      ) : (
        <Results
          songs={songs}
          onSelectSong={(newSong) => setSelectedSong(newSong)}
        />
      )}
    </Container>
  );
}

export default HomePage;
