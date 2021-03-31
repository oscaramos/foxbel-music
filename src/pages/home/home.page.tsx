import { Header } from "./components/header/header.component";
import { Results } from "./components/results/results.component";

import "./home.page.scss";

function HomePage() {
  return (
    <div>
      <Header />
      <Results />
    </div>
  );
}

export default HomePage;
