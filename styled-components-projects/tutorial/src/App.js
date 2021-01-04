import React from "react";
import "./App.css";
import { DangerButton, SuccessButton } from "./components/PropsButton";
// import { Button, SecondButton } from "./components/Buttons";
// import Header from "./components/Header";
import StyledHeader from "./components/StyledHeader";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  } 
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Header />
      <Button>Test</Button>
      <SecondButton>Click me I'm Second</SecondButton> */}
      <StyledHeader title="hello from app." />
      <SuccessButton color="blue">Button Number One</SuccessButton>
      <DangerButton color="red">Button Number Two</DangerButton>
      {/* <BigButton>Button Number Three</BigButton> */}
    </div>
  );
}

export default App;
