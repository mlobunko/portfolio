import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledArrow,
  StyledBottom,
  StyledBottomText,
  StyledGreetings,
  StyledHeader,
  StyledHeaderFirstSentence,
  StyledHeaderSecondSentence
} from "../styles";

describe("StyledArrow", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledArrow />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledBottom", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledBottom />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledBottomText", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledBottomText />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledGreetings", () => {
  const props = {
    image: "123"
  };
  it("renders correctly", () => {
    const wrapper = shallow(<StyledGreetings {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledHeader", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledHeaderFirstSentence", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeaderFirstSentence />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledHeaderSecondSentence", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledHeaderSecondSentence />);
    expect(wrapper).toMatchSnapshot();
  });
});
