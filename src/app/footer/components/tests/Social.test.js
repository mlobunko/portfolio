import React from "react";
import { shallow } from "enzyme";

import { Social } from "../Social";

describe("Social", () => {
  it("renders correctly", () => {
    const props = {
      link: "123",
      name: "family",
      iconComponent: <div />
    };
    const wrapper = shallow(<Social {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
