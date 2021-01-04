import React from "react";
function Note(props) {
  return (
    <div className="note">
      <p>{props.note.text}</p>
    </div>
  );
}

export default Note;
