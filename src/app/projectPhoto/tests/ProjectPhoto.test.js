import React from "react";
import { shallow } from "enzyme";

import { ProjectPhoto } from "../ProjectPhoto";

describe("render", () => {
  it("renders correctly", () => {
    const props = {
      description: "description-family",
      image: "image",
      link: "https://a.com",
      nameOfProject: "nameOfProject",
      margin: true,
      textColor: "black",
      textUp: true
    };
    const wrapper = shallow(<ProjectPhoto {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
