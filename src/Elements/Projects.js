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
  width: 80em;
  max-width: 80vw;
`;

export const LayoutLeftInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ProjectLayoutRight = styled(ProjectLayoutLeft)``;

export const LayoutRightInfo = styled(LayoutLeftInfo)`
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ProjectName = styled.div`
  color: black;
  text-align: center;
  font-size: 3em;
  border: 200px solid transparent;
  border-image: url(${BorderImageSign}) 300 round;
  z-index: 100;
  @media (max-width: 1200px) {
    border: 100px solid transparent;
    border-image: url(${BorderImageSign}) 300 round;
  }
`;

export const NestedName = styled.h2`
  background-image: url(${DarkBG});
  background-size: 100px;
  color: rgb(245, 235, 230);
  margin: 0;
  padding: 0.1em 0.2em;
  @media (max-width: 1200px) {
    background-size: 50px;
  }
`;

export const ProjectDescription = styled.div`
  position: relative;
  top: 3em;
  border: 60px solid transparent;
  border-image: url(${BorderImageRock}) 100 repeat;
  width: 80em;
  max-width: 60vw;
  z-index: -1;
  @media (max-width: 1200px) {
    border: 30px solid transparent;
    border-image: url(${BorderImageRock}) 100 round;
  }
`;

export const NestedDescription = styled.p`
  color: rgb(80, 80, 80);
  background-image: url(${RockBG});
  background-size: 50px;
  font-size: 2em;
  margin: 0;
  @media (max-width: 1200px) {
    background-size: 25px;
  }
`;

export const ProjectImage = styled.img`
  width: 80em;
  max-width: 80vw;
  border: 28px solid transparent;
  border-image: url(${BorderImageWood}) 40 round;
  @media (max-width: 1200px) {
    border: 14px solid transparent;
    border-image: url(${BorderImageWood}) 40 round;
    position: relative;
    top: 5em;
  }
`;
