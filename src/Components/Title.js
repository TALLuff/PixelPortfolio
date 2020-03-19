import React from "react";
import { TitleContainer, TitleGif } from "../Elements/Title";

const Title = () => {
  return (
    <TitleContainer>
      <TitleGif src={require("../Images/BigNameHeader.gif")} />
    </TitleContainer>
  );
};

export default Title;
