import React, { useState, useEffect } from "react";
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
  const [animPaused, setAnimPaused] = useState(false);

  useEffect(() => {
    if (animPaused) {
      setTimeout(() => setAnimPaused(false), 800);
    }

    const bobAnima = document.getElementsByClassName("bobAnima");
    for (let i = 0; i < bobAnima.length; i++) {
      bobAnima[i].style.animationPlayState = animPaused ? "paused" : "running";
    }
  }, [animPaused]);

  return (
    <div
      className="App"
      onWheel={e => setAnimPaused(true)}
      onTouchMove={e => setAnimPaused(true)}
    >
      {/* <Navbar /> */}
      <ParallaxProvider>
        <Clouds className="clouds" />
        <Mountains className="mountains" />
        <Title />
        <About />
        <Projects />
        <TechStack animPaused={animPaused} />
        {/* <Contact /> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
