import styled from "styled-components";

export const StyledImage = styled.div`
  background: ${props =>
    `url(${props.image}) no-repeat center center / contain`};
  width: 100%;
  height: 3rem;
  margin-bottom: 0.2rem;

  @media (min-width: 768px) {
    height: 6rem;
  }
`;
StyledImage.displayName = "StyledImage";

export const StyledSkill = styled.div`
  height: 4rem;
  width: 40%;
  text-align: center;

  @media (min-width: 768px) {
    width: 25%;
    height: 7rem;
  }
`;
StyledSkill.displayName = "StyledSkill";

export const StyledSkills = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1366px;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;
StyledSkills.displayName = "Skills";
