import { Header } from "./components/header/header.component";
import { Footer } from "./components/footer/footer.component";
import { Results } from "./components/results/results.component";

import "./home.page.scss";

function HomePage() {
  return (
    <div>
      <Header />
      <Results />
      <Footer />
    </div>
  );
}

export default HomePage;
