import React from "react";
import { Parallax } from "react-scroll-parallax";

const Mountains = () => {
  return (
    <div className="mountainImages">
      <Parallax y={[500, -500]}>
        <Parallax y={[0, 0]} className="mountainWrapper4">
          <div className="mountains4" />
        </Parallax>
        <Parallax y={[30, -3]} className="mountainWrapper3">
          <div className="mountains3" />
        </Parallax>
        <Parallax y={[60, -6]} className="mountainWrapper2">
          <div className="mountains2" />
        </Parallax>
        <Parallax y={[90, -9]} className="mountainWrapper1">
          <div className="mountains1" />
        </Parallax>
      </Parallax>
    </div>
  );
};

export default Mountains;
