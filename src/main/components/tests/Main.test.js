import React from "react";
import { shallow } from "enzyme";

import { Main } from "../Main";

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
