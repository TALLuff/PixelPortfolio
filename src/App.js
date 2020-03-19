import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar";
import Clouds from "./Components/Clouds";
import Title from "./Components/Title";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";
import Mountains from "./Components/Mountains";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <ParallaxProvider>
        <Clouds className="clouds" />
        <Mountains className="mountains" />
        <Title />
        <About />
        <Projects />
        <TechStack />
        {/* <Contact /> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
