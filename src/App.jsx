import React from "react";
import NavBar from "./components/Nav";
import Start from "./pages/Start";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Finish from "./pages/Finish";

function App() {
  return (
    <div>
      <NavBar />
      <div id="start">
        <Start />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="finish">
        <Finish />
      </div>
    </div>
  );
}

export default App;

