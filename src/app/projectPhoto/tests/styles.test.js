import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledDescription,
  StyledNameOfProject,
  StyledProjectPhoto,
  StyledText
} from "../styles";

describe("StyledDescription", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledDescription />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledNameOfProject", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledNameOfProject />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledProjectPhoto", () => {
  it("renders correctly, when textColor=white, textUp=true", () => {
    const props = {
      image: "123",
      textColor: "white",
      textUp: true
    };
    const wrapper = shallow(<StyledProjectPhoto {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, when textColor=false, textUp=false", () => {
    const props = {
      image: "123"
    };
    const wrapper = shallow(<StyledProjectPhoto {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledText", () => {
  it("renders correctly, when textUp true", () => {
    const props = {
      textUp: true
    };
    const wrapper = shallow(<StyledText {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<StyledText />);
    expect(wrapper).toMatchSnapshot();
  });
});
