import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: rgb(85, 85, 85);
`;
StyledFontAwesomeIcon.displayName = "StyledFontAwesomeIcon";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
`;
StyledFooter.displayName = "StyledFooter";

export const StyledSocial = styled.div`
  ${props => `url(${props.image}) no-repeat center center / contain`};
  width: 4rem;
  height: 100%;
  margin: 0 1rem;
  font-size: 2rem;
  text-align: center;
`;
StyledSocial.displayName = "StyledSocial";
