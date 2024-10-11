import "../CSS/App.css";
import "../CSS/utility.css";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
