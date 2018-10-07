import React from "react";

import Skill from "./Skill";
import { StyledSkills } from "./styles";
import ImageCss from "../images/css.svg";
import ImageGit from "../images/git.png";
import ImageHtml from "../images/html.png";
import ImageJs from "../images/js.svg";
import ImageReact from "../images/react.svg";
import ImageReduxSaga from "../images/redux-saga.png";
import ImageRedux from "../images/redux.svg";
import ImageResponsive from "../images/responsive.svg";
import ImageRestApi from "../images/rest-api.png";
import ImageSass from "../images/sass.png";
import ImageStyledComponents from "../images/styled-components.png";
import ImageTest from "../images/test.png";

export const Skills = () => (
  <StyledSkills>
    <Skill text={"HTML"} image={ImageHtml} />
    <Skill text={"CSS"} image={ImageCss} />
    <Skill text={"Sass"} image={ImageSass} />
    <Skill text={"Responsive Design"} image={ImageResponsive} />
    <Skill text={"Javascript"} image={ImageJs} />
    <Skill text={"React"} image={ImageReact} />
    <Skill text={"Redux"} image={ImageRedux} />
    <Skill text={"Redux-Saga"} image={ImageReduxSaga} />
    <Skill text={"Styled Components"} image={ImageStyledComponents} />
    <Skill text={"Git"} image={ImageGit} />
    <Skill text={"REST API"} image={ImageRestApi} />
    <Skill text={"Unit testing"} image={ImageTest} />
  </StyledSkills>
);
Skills.displayName = "Skills";

export default Skills;
