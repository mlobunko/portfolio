import React from "react";
import PropTypes from "prop-types";

import LinkToGitHub from "shared/linkToGitHub";

import {
  StyledDescription,
  StyledNameOfProject,
  StyledProjectPhoto,
  StyledText
} from "./styles";

export const ProjectPhoto = ({
  description,
  image,
  link,
  nameOfProject,
  margin,
  textColor,
  textUp
}) => (
  <StyledProjectPhoto
    image={image}
    margin={margin}
    textColor={textColor}
    textUp={textUp}
  >
    <StyledText textUp={textUp}>
      <StyledNameOfProject>{nameOfProject}</StyledNameOfProject>
      <StyledDescription>{description}</StyledDescription>
      <LinkToGitHub
        link={link}
        nameOfProject={nameOfProject}
        textColor={textColor}
      />
    </StyledText>
  </StyledProjectPhoto>
);
ProjectPhoto.displayName = "ProjectPhoto";

export default ProjectPhoto;

ProjectPhoto.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  nameOfProject: PropTypes.string,
  margin: PropTypes.bool,
  textColor: PropTypes.string,
  textUp: PropTypes.bool
};
