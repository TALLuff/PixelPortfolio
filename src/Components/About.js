import React from "react";
import {
  AboutContainer,
  AboutHeader,
  NestedHeader,
  AboutImage,
  AboutTitle,
  AboutPara
} from "../Elements/About";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <Parallax y={[30, -30]}>
      <AboutHeader>
        <NestedHeader>
          <AboutImage />
          <AboutTitle>About</AboutTitle>
        </NestedHeader>
      </AboutHeader>
      <AboutContainer>
        <AboutPara>
          Full stack software developer with commercial project experience.
          Comfortable working independently and also able to thrive and
          contribute to a team. My pathway of programming started off with
          online tutorials and self teaching, then after finding and graduating
          Northcoders I was able to start work on a new project which our team
          took from start to MVP, all while learning new tech along the way.
          Personally I feel drawn to programming as it allows me to be creative
          and problem solve, I hope I can find a role which allows me to keep
          learning new skills and working on interesting projects.
        </AboutPara>
      </AboutContainer>
    </Parallax>
  );
};

export default About;
