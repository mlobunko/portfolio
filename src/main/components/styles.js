import styled, { injectGlobal } from "styled-components";
import RobotoMedium from "../fonts/Roboto-Medium.ttf";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoThin from "../fonts/Roboto-Thin.ttf";

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export const StyledHeaderOfSections = styled.h2`
  padding: 2rem 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  letter-spacing: 0.15rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
StyledHeaderOfSections.displayName = "StyledHeaderOfSections";

export const StyledMain = styled.div`
  background: rgb(245, 245, 245);
  color: black;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 400;
  min-height: 100vh;

  @font-face {
    font-family: Roboto;
    src: url(${RobotoThin});
    font-weight: 100;
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoMedium});
    font-weight: 500;
  }
`;
StyledMain.displayName = "StyledMain";
