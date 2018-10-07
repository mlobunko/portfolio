import styled from "styled-components";

export const StyledArrow = styled.div`
  margin-top: 0;
  color: rgb(100, 100, 100);
`;
StyledArrow.displayName = "StyledArrow";

export const StyledBottom = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 100;
  color: black;
  padding-bottom: 10vh;

  @media (min-width: 375px) {
    font-size: 1rem;
  }}
`;
StyledBottom.displayName = "StyledBottom";

export const StyledBottomText = styled.div`
  margin-bottom: 0.3rem;
`;
StyledBottomText.displayName = "StyledBottomText";

export const StyledGreetings = styled.div`
  background: ${props => `url(${props.image}) no-repeat left center / cover`};
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-content: center;
`;
StyledGreetings.displayName = "StyledGreetings";

export const StyledHeader = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 100;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;
StyledHeader.displayName = "StyledHeader";

export const StyledHeaderFirstSentence = styled.h1`
  padding-bottom: 2rem;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
`;
StyledHeaderFirstSentence.displayName = "StyledHeaderFirstSentence";

export const StyledHeaderSecondSentence = styled.h2`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
`;
StyledHeaderSecondSentence.displayName = "StyledHeaderSecondSentence";
