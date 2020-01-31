import React from "react";
import ReactDOM from "react-dom";
import ReviewView from "./ReviewView";

describe("ReviewView", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReviewView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});