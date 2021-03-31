import { useState } from "react";
import { Container } from "react-bootstrap";

import { Header } from "./components/header/header.component";
import { Results } from "./components/results/results.component";
import { PreviewSong } from "./components/preview-song/preview-song.component";

import { useSearch } from "../../services/songs/search.hook";

import "./home.page.scss";

function HomePage() {
  const [keyword, setKeyword] = useState("eminem");

  const { songs } = useSearch({ keyword });

  return (
    <Container className="homepage-container">
      <Header keyword={keyword} setKeyword={setKeyword} />
      <PreviewSong />
      {!songs ? "cargando..." : <Results songs={songs} />}
    </Container>
  );
}

export default HomePage;
