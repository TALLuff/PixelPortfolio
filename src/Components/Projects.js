import React from "react";
import {
  ProjectsContainer,
  ProjectName,
  NestedName,
  ProjectDescription,
  NestedDescription,
  ProjectImage,
  ProjectLayoutLeft,
  ProjectLayoutRight,
  LayoutLeftInfo,
  LayoutRightInfo
} from "../Elements/Projects";
import { Parallax } from "react-scroll-parallax";
import { BobAnima } from "../Elements/BobAnim";

const Projects = () => {
  const projects = [
    {
      projectName: "Dorris",
      description:
        "Working as a full stack developer building a chatbot builder/creation tool from start to MVP, used in areas such as insurance forms and call centres. API-driven backend using Node, SQL and GCP functions. Frontend uses React, react hooks, mobx-state-tree and styled components. All code is tested in either jest or cypress and work was done in an agile environment with daily standups and jira to project manage.",
      image: require("../Images/SSDorris.png")
    },
    {
      projectName: "TienLen",
      description:
        "Vietnamese card game where players try to get rid of their cards first. Works live and allows 2 players to play by joining the same lobby. \n Frontend - https://tien-len.netlify.com/ | https://github.com/TALLuff/Tien-Len-Multi \n Built with: React, HTML, CSS, Reach Router, Firebase \n Backend built with: Firebase.",
      image: require("../Images/SSTienLen.png")
    },
    {
      projectName: "Mapture",
      description:
        "Geo-location based video messaging app built in Android studio with kotlin, produced by myself and 4 other Northcoders in the final 2 weeks of the course. Users can record and post a video message at their location, view any within 75m radius, add/request friends and send private messages.",
      image: require("../Images/SSMapture.png")
    }
  ];

  const smallWindow = window.innerWidth <= 1200;

  return (
    <ProjectsContainer>
      {projects.map(({ projectName, description, image }, index) => {
        if (index % 2 === 0 || smallWindow) {
          return (
            <ProjectLayoutLeft key={projectName}>
              <Parallax y={[-20, 20]}>
                <LayoutLeftInfo>
                  <Parallax y={[-5, 5]}>
                    <BobAnima duration="5s" className="bobAnima">
                      <ProjectName>
                        <NestedName>{projectName}</NestedName>
                      </ProjectName>
                    </BobAnima>
                  </Parallax>
                  <ProjectDescription>
                    <NestedDescription>{description}</NestedDescription>
                  </ProjectDescription>
                </LayoutLeftInfo>
              </Parallax>
              <ProjectImage src={image} />
            </ProjectLayoutLeft>
          );
        }
        return (
          <ProjectLayoutRight key={projectName}>
            <LayoutRightInfo>
              <Parallax y={[5, -5]}>
                <BobAnima duration="5s" className="bobAnima">
                  <ProjectName>
                    <NestedName>{projectName}</NestedName>
                  </ProjectName>
                </BobAnima>
              </Parallax>
              <Parallax y={[-20, 20]}>
                <ProjectDescription>
                  <NestedDescription>{description}</NestedDescription>
                </ProjectDescription>
              </Parallax>
            </LayoutRightInfo>
            <ProjectImage src={image} />
          </ProjectLayoutRight>
        );
      })}
    </ProjectsContainer>
  );
};

export default Projects;
