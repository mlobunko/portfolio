import React from "react";
import { shallow } from "enzyme";

import { Skills } from "../Skills";

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper).toMatchSnapshot();
  });
});
