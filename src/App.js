import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import AnimCursor from "./components/animCursor";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <AnimCursor/>
    </div>
  );
}

export default App;
