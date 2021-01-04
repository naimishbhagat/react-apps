import React from "react";
import "./App.css";
import Title from "./components/Title";

//inline styles
//CSS file
//css variables
//components based css

function App() {
  return (
    <div>
      <h1>Styled Components</h1>
      <h2
        style={{
          fontSize: "16px",
          color: "red",
          textTransform: "uppercase",
          display: "block",
        }}
      >
        Inline styles
      </h2>
      <h2 className="global">Golbal CSS</h2>
      <h2 className="first">first</h2>
      <h2 className="second">second</h2>
      <Title />
    </div>
  );
}

export default App;
