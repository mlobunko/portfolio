import React from "react";
import PropTypes from "prop-types";

import { StyledSocial } from "./styles";

export const Social = ({ link, name, iconComponent }) => (
  <a
    href={link}
    target={"_blank"}
    rel={"noopener noreferrer"}
    aria-label={name}
  >
    <StyledSocial>{iconComponent}</StyledSocial>
  </a>
);
Social.displayName = "Social";

export default Social;

Social.propTypes = {
  iconComponent: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
