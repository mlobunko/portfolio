import styled from "styled-components";

export const StyledDescription = styled.div`
  text-align: center;
  font-weight: 400;
  padding-bottom: 1rem;
`;
StyledDescription.displayName = "StyledDescription";

export const StyledNameOfProject = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  padding-bottom: 1rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
StyledNameOfProject.displayName = "StyledNameOfProject";

export const StyledProjectPhoto = styled.section`
  width: 100%;
  height: 600px;
  max-width: 1366px;
  color: ${props => (props.textColor ? `${props.textColor}` : "black")};
  margin-bottom: ${props => props.margin && "2rem"};
  margin-left: auto;
  margin-right: auto;
  background: ${props => `url(${props.image}) no-repeat center center / cover`};
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.textUp ? "flex-start" : "flex-end")};

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
StyledProjectPhoto.displayName = "StyledProjectPhoto";

export const StyledText = styled.div`
  margin: 0 auto;
  width: 18rem;
  padding-bottom: ${props => (props.textUp ? "0" : "1rem")};
  padding-top: ${props => (props.textUp ? "1rem" : "0")};
  text-align: center;
  @media (min-width: 375px) {
    width: 20rem;
  }
  @media (min-width: 768px) {
    margin-left: 5%;
    padding-top: 2rem;
    padding-bottom: 0;
  }
`;
StyledText.displayName = "StyledText";
