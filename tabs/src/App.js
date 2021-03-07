import React from "react";
const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

function App() {
  const [number, updateNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer((state, action) => {
    /* implement reducer */
    if (action.type === OPERATIONS.ADD) {
      const input = action.payload;
      return { ...state, number: number + input };
    }
    if (action.type === OPERATIONS.SUBTRACT) {
      // const number = action.payload;
      return { ...state, number: number - number };
    }
    return state;
  }, 0);

  /* implement dispatches */
  const add = () => dispatch({ type: OPERATIONS.ADD, payload: number });
  const subtract = () =>
    dispatch({ type: OPERATIONS.SUBTRACT, payload: number });

  const handleNumberChange = (e) => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App;
