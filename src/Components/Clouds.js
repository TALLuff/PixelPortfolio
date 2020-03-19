import React from "react";
import { Parallax } from "react-scroll-parallax";

const Clouds = () => {
  return (
    <div className="cloudImages">
      <Parallax y={[-60, 20]} className="cloudWrapper3">
        <div className="clouds3" />
      </Parallax>
      <Parallax y={[-30, -20]} className="cloudWrapper2">
        <div className="clouds2" />
      </Parallax>
      <Parallax y={[0, -60]} className="cloudWrapper1">
        <div className="clouds1" />
      </Parallax>
    </div>
  );
};

export default Clouds;
