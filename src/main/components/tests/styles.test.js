import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledHeaderOfSections, StyledMain } from "../styles";

describe("StyledHeaderOfSections", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeaderOfSections />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledMain", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
