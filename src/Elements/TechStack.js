import styled from "styled-components";
import BorderImageWood from "../Images/BorderBig.png";
import BorderImageStack from "../Images/StackSign.png";
import DarkBG from "../Images/DarkBGSmall.png";
import LightBG from "../Images/LightBGSmall.png";

export const TechContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  width: 30em;
  margin: 10em auto;
  padding: 0;
`;

export const LeftTechContainer = styled(TechContainer)`
  flex-direction: column;
  margin: 0 auto;
`;

export const RightTechContainer = styled(TechContainer)`
  flex-direction: column;
  margin: 0 auto;
`;

export const StackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3em;
  @media (max-width: 1200px) {
    margin: 0 3em;
  }
`;

export const StackTitle = styled.div`
  position: relative;
  top: 20px;
  border: 30px solid white;
  border-image: url(${BorderImageWood}) 40 round;
  margin: 0 auto;
  z-index: 100;
  width: 20em;
  @media (max-width: 1200px) {
    border: 15px solid white;
    border-image: url(${BorderImageWood}) 40 repeat;
  }
`;

export const NestedStackTitle = styled.h3`
  text-align: center;
  font-size: 3em;
  background-image: url(${DarkBG});
  background-size: 100px;
  color: rgb(245, 235, 230);
  margin: 0;
  padding: 0.2em;
  @media (max-width: 1200px) {
    background-size: 50px;
  }
`;

export const TechTitle = styled.div`
  margin: 0;
  border: 60px solid white;
  border-image: url(${BorderImageStack}) 100 repeat;
  position: relative;
  top: ${props => `-${props.position * 45}px`};
  min-width: 18em;
  @media (max-width: 1200px) {
    border: 30px solid white;
    border-image: url(${BorderImageStack}) 100 repeat;
    top: ${props => `-${props.position * 25}px`};
  }
`;

export const NestedTechTitle = styled.div`
  text-align: center;
  color: rgb(40, 40, 40);
  background-image: url(${LightBG});
  background-size: 100px;
  font-size: 2.5em;
  margin: 0;
  padding: 0.2em 0.5em;
  @media (max-width: 1200px) {
    background-size: 50px;
  }
`;

export const Propeller = styled.img`
  display: flex;
  justify-content: center;
  position: relative;
  height: 8em;
  top: 5.3em;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 50%;
    top: 3.2em;
  }
`;
