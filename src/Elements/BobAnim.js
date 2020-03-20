import styled, { keyframes } from "styled-components";

const bob = keyframes`
from {
    margin-top: 0px;
    margin-bottom: 50px;
}
50% {
    margin-top: 50px;
    margin-bottom: 0px;
}
to {
    margin-top: 0px;
    margin-bottom: 50px;
}
`;

export const BobAnima = styled.div`
  position: relative;
  animation-timing-function: ease-in-out;
  animation-duration: ${props => props.duration};
  animation-name: ${bob};
  animation-iteration-count: infinite;
  top: 50px;
`;
