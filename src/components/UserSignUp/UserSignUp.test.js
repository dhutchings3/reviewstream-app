import React from "react";
import ReactDOM from "react-dom";
import UserSignup from "./UserSignup";
import { BrowserRouter } from "react-router-dom";

describe("UserSignup", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <UserSignup />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
