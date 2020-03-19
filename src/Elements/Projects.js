import styled from "styled-components";
import BorderImageSign from "../Images/IslandBorderSign.png";
import BorderImageRock from "../Images/RockBorderSmall.png";
import BorderImageWood from "../Images/BorderBig.png";
import DarkBG from "../Images/DarkBGSmall.png";
import RockBG from "../Images/RockBG.png";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectLayoutLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 4em;
  max-width: 80em;
`;

export const LayoutLeftInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LayoutRightInfo = styled(LayoutLeftInfo)`
  flex-direction: row-reverse;
`;

export const ProjectLayoutRight = styled(ProjectLayoutLeft)``;

export const ProjectName = styled.div`
  color: black;
  text-align: center;
  font-size: 3em;
  border: 200px solid transparent;
  border-image: url(${BorderImageSign}) 300 round;
`;

export const NestedName = styled.h2`
  background-image: url(${DarkBG});
  background-size: 100px;
  color: rgb(245, 235, 230);
  margin: 0;
  padding: 0.1em 0.2em;
`;

export const ProjectDescription = styled.div`
  position: relative;
  top: 3em;
  border: 60px solid transparent;
  border-image: url(${BorderImageRock}) 100 repeat;
`;

export const NestedDescription = styled.p`
  color: rgb(80, 80, 80);
  background-image: url(${RockBG});
  background-size: 50px;
  font-size: 2em;
  margin: 0;
`;

export const ProjectImage = styled.img`
  max-width: 80em;

  border: 28px solid transparent;
  border-image: url(${BorderImageWood}) 40 round;
`;
