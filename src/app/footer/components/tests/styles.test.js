import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledFontAwesomeIcon, StyledFooter, StyledSocial } from "../styles";

describe("StyledFontAwesomeIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledFontAwesomeIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledFooter", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledSocial", () => {
  it("renderes correctly", () => {
    const props = {
      image: "123"
    };
    const wrapper = shallow(<StyledSocial {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
