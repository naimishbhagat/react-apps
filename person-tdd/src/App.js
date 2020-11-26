import React, { useState } from "react";
import PersonList from "./PersonList";

function App() {
  const [people, setPeople] = useState([{ name: "Naimish" }]);
  return (
    <div className="App">
      <PersonList people={people} />
    </div>
  );
}

export default App;
