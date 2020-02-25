import React from "react";
import "./HeaderToggleButton.css";

function headerToggleButton(props) {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
}

export default headerToggleButton;
