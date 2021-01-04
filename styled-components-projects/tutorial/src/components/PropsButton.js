import styled from "styled-components";

export const PropsButton = styled.button`
  /* background: ${(props) => (props.color ? props.color : "green")}; */
  color: white;
  padding: 1rem;
  font-size: 2rem;
  margin: 1rem;
`;
export const DangerButton = styled(PropsButton)`
  background: red;
`;
export const SuccessButton = styled(PropsButton)`
  background: green;
`;
// export const BigButton = styled(PropsButton)`
//   margin: 0.5rem;
//   font-size: 3rem;
//   text-transform: uppercase;
// `;
