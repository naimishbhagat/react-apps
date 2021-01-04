import styled from "styled-components";

const color = "yellow";
const padding = "padding:1rem";
const margin = "margin:1rem";
const border = (width = 3) => {
  return `border:solid ${width}px red`;
};

export const Button = styled.button`
  ${padding};
  ${margin};
  color: red;
  background: blue;
  text-transform: uppercase;
  ${border(0)};
`;
export const SecondButton = styled.button`
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
  ${padding};
  ${margin};
  ${border()};
`;
