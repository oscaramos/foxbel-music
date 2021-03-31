import HomePage from "./pages/home/home.page";
import { Sidebar } from "./components/sidebar/sidebar.component";
import { Footer } from "./pages/home/components/footer/footer.component";

function App() {
  return (
    <div>
      <Sidebar>
        <HomePage />
      </Sidebar>
      <Footer />
    </div>
  );
}

export default App;
