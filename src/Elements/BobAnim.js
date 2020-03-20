import styled, { keyframes } from "styled-components";

const bob = keyframes`
from {
    padding-top: 0px;
    padding-bottom: 50px;
}
50% {
    padding-top: 50px;
    padding-bottom: 0px;
}
to {
    padding-top: 0px;
    padding-bottom: 50px;
}
`;

export const BobAnima = styled.div`
  position: relative;
  animation-timing-function: ease-in-out;
  animation-duration: ${props => props.duration};
  animation-name: ${bob};
  animation-iteration-count: infinite;
  animation-play-state: ${props => (props.animPaused ? "paused" : "play")};
  top: 50px;
`;
