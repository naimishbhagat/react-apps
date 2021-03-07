import React from "react";

export default function Error(props) {
  return (
    <div style={{ color: "red", marginTop: "0.5rem" }}>{props.children}</div>
  );
}
