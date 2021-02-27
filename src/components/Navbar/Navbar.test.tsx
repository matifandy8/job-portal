import React from "react";
import "jest-enzyme";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

it("should render correctly with no props", () => {
  const component = shallow(<Navbar />);

  expect(component).toMatchSnapshot();
});
