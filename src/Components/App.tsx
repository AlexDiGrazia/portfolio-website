import "../CSS/App.css";
import "../CSS/utility.css";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
