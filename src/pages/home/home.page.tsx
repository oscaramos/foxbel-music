import { Container } from "react-bootstrap";

import { Header } from "./components/header/header.component";
import { Results } from "./components/results/results.component";

import "./home.page.scss";

function HomePage() {
  return (
    <Container className="homepage-container">
      <Header />
      <Results />
    </Container>
  );
}

export default HomePage;
