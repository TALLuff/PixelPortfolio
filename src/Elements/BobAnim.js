import styled, { keyframes } from "styled-components";

const bob = keyframes`
from {
    top: 0px;
}
50% {
    top: 50px;
}
to {
    top: 0px;
}
`;

export const BobAnima = styled.div`
  position: relative;
  animation-timing-function: ease-in-out;
  animation-duration: ${props => props.duration};
  animation-name: ${bob};
  animation-iteration-count: infinite;
`;
