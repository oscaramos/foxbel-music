import HomePage from "./pages/home/home.page";

import { Sidebar } from "./components/sidebar/sidebar.component";
import { Footer } from "./components/footer/footer.component";

import { PlayingSongProvider } from "./context/playing-song.context";

function App() {
  return (
    <PlayingSongProvider>
      <Sidebar>
        <HomePage />
      </Sidebar>
      <Footer />
    </PlayingSongProvider>
  );
}

export default App;
