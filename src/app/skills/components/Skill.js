import React from "react";
import PropTypes from "prop-types";

import { StyledImage, StyledSkill } from "./styles";

export const Skill = ({ text, image }) => (
  <StyledSkill>
    <StyledImage image={image} />
    <div>{text}</div>
  </StyledSkill>
);
Skill.displayName = "Skill";

export default Skill;

Skill.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
};
