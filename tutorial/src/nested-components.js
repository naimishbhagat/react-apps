import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div className="greeting">
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>John Doe</h2>;
};

const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
