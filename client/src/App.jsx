import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Home from "./Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}