import styled from "styled-components";
import BorderImage from "../Images/BorderBig.png";
import DarkBG from "../Images/DarkBGSmall.png";
import LightBG from "../Images/LightBGSmall.png";

export const AboutContainer = styled.div`
  max-width: 40em;
  width: 50%;
  border: 28px solid transparent;
  border-image: url(${BorderImage}) 40 round;
  margin: 0 auto 2em auto;
  padding: 0;
  position: relative;
  top: 8em;
`;

export const AboutImage = styled.img`
  margin: 0;
`;

export const AboutHeader = styled.div`
  border: 30px solid transparent;
  border-image: url(${BorderImage}) 40 round;
  margin: 0 auto;
  position: relative;
  top: 12em;
  width: 15em;
  z-index: 100;
`;

export const AboutTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: rgb(245, 235, 230);
`;

export const AboutPara = styled.div`
  size: 100%;
  background-size: 100px;
  background-image: url(${LightBG});
  font-size: 2em;
  color: rgb(40, 40, 40);
  z-index: 100;
  margin: 0;
  padding: 2em 1em 1em 1em;
`;

export const NestedHeader = styled.div`
  background-size: 100px;
  background-image: url(${DarkBG});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5em 0.5em 0.5em;
`;
