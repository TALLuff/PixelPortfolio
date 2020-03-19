import React from "react";
import {
  TechContainer,
  LeftTechContainer,
  RightTechContainer,
  StackContainer,
  StackTitle,
  NestedStackTitle,
  TechTitle,
  NestedTechTitle,
  Propeller
} from "../Elements/TechStack";
import { BobAnima } from "../Elements/BobAnim";
import { Parallax } from "react-scroll-parallax";

const TechStack = () => {
  const techStack = {
    FrontEnd: [
      "React",
      "HTML",
      "CSS (styled-components)",
      "Reach Router",
      "Axios",
      "Mobx-state-tree",
      "Formik"
    ],
    BackEnd: ["Node.js", "Express", "Knex", "JOI", "PSQL", "Firebase", "GCP"],
    Testing: ["Jest", "Jest Mocks", "Mocha", "Chai", "Cypress"],
    Software: ["Photoshop", "Paint-tool-sai", "Krita", "Unity"]
  };

  const techKeys = Object.keys(techStack);

  const sortTech = techArr => {
    return techArr.sort((a, b) => {
      if (a.length < b.length) {
        return 1;
      }
      if (a.length > b.length) {
        return -1;
      }
      return 0;
    });
  };

  return (
    <TechContainer>
      <LeftTechContainer>
        {techKeys.map((techKey, index) => {
          if (index % 2 === 0) {
            let alternate = index + (1 % 2);
            return (
              <Parallax y={[-20, 20]} key={techKey}>
                <BobAnima duration={`${alternate * 2}s`}>
                  <Propeller src={require("../Images/SlowPropeller.gif")} />
                  <StackContainer>
                    <StackTitle>
                      <NestedStackTitle>{techKey}</NestedStackTitle>
                    </StackTitle>
                    {sortTech(techStack[techKey]).map((tech, index) => {
                      return (
                        <TechTitle key={tech} position={index}>
                          <NestedTechTitle>{tech}</NestedTechTitle>
                        </TechTitle>
                      );
                    })}
                  </StackContainer>
                </BobAnima>
              </Parallax>
            );
          } else {
            return null;
          }
        })}
      </LeftTechContainer>
      <RightTechContainer>
        {techKeys.map((techKey, index) => {
          if (index % 2 !== 0) {
            let alternate = index + (1 % 2);
            return (
              <Parallax y={[-10, 10]} key={techKey}>
                <BobAnima duration={`${alternate * 2}s`}>
                  <Propeller src={require("../Images/SlowPropeller.gif")} />
                  <StackContainer>
                    <StackTitle>
                      <NestedStackTitle>{techKey}</NestedStackTitle>
                    </StackTitle>
                    {sortTech(techStack[techKey]).map((tech, index) => {
                      return (
                        <TechTitle key={tech} position={index}>
                          <NestedTechTitle>{tech}</NestedTechTitle>
                        </TechTitle>
                      );
                    })}
                  </StackContainer>
                </BobAnima>
              </Parallax>
            );
          } else {
            return null;
          }
        })}
      </RightTechContainer>
    </TechContainer>
  );
};

export default TechStack;
