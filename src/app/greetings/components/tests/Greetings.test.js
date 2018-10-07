import React from "react";
import { shallow } from "enzyme";

import { Greetings } from "../Greetings";

beforeEach(() => {
  jest.resetAllMocks();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Greetings />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("methods", () => {
  it("setState call with right argumetns in setTimeOut on componentDidMount", () => {
    const wrapper = shallow(<Greetings />);
    wrapper.setState = jest.fn();
    wrapper.update();
    expect(wrapper.setState).toHaveBeenCalledTimes(0);
    jest.runAllTimers();
    expect(wrapper.setState).toHaveBeenCalledWith({ show: true });
  });
});
