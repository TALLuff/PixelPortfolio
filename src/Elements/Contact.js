import styled from "styled-components";
import ContactInput from "../Images/ContactSign.png";
import Sign1 from "../Images/ContactBoard1.png";
import Sign2 from "../Images/ContactBoard2.png";
import LightBG from "../Images/LightBGSmall.png";
import WoodBG from "../Images/WoodBG.png";

export const ContactContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.div`
  border: 60px solid transparent;
  border-image: url(${Sign2}) 100 round;
  display: flex;
  position: relative;
  top: 200px;
  right: 9em;
`;

export const NestedLabel = styled.label`
  background-image: url(${WoodBG});
  background-size: 70px;
  border: none;
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 2.2em;
  color: rgb(60, 50, 40);
  display: flex;
  padding: 0.3em 0;
`;

export const FormInput = styled.div`
  border: 200px solid transparent;
  border-image: url(${ContactInput}) 300 round;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0);
  width: 25em;
  height: 15em;
  display: flex;
  flex-direction: column;
`;

export const NestedInput = styled.textarea`
  background-image: url(${LightBG});
  background-size: 100px;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 2em;
  font-family: "freePixel";
  color: rgb(40, 40, 40);
  resize: none;
`;

export const NestedEmail = styled.input`
  background-image: url(${LightBG});
  background-size: 100px;
  border: none;
  width: 100%;
  margin: 0;
  font-size: 2em;
  font-family: "freePixel";
  color: rgb(40, 40, 40);
  resize: none;
`;

export const FormSubmit = styled.div`
  border: 60px solid transparent;
  border-image: url(${Sign1}) 100 round;
  display: flex;
  position: relative;
  bottom: 210px;
  left: 9em;
`;

export const NestedSubmit = styled.button`
  background-image: url(${WoodBG});
  background-size: 70px;
  border: none;
  text-align: center;
  width: 100%;
  margin: 0;
  font-family: "freePixel";
  font-size: 1.8em;
  color: rgb(60, 50, 40);
  display: flex;
  padding: 0;
`;

export const NoticeBoard = styled.div``;

export const SignPost = styled.div``;
