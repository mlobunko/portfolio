import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledImage, StyledSkill, StyledSkills } from "../styles";

describe("StyledImage", () => {
  const props = {
    image: "image"
  };
  it("renders correctly", () => {
    const wrapper = shallow(<StyledImage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSkill", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledSkill />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSkills", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledSkills />);
    expect(wrapper).toMatchSnapshot();
  });
});
