import React from "react";
import { shallow } from "enzyme";

import { Skill } from "../Skill";

describe("Skill", () => {
  const props = {
    text: "text",
    image: "image"
  };
  it("renders correctly", () => {
    const wrapper = shallow(<Skill {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
