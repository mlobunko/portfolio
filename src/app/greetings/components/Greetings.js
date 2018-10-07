import React from "react";
import ReactRevealText from "react-reveal-text";

import {
  StyledArrow,
  StyledBottom,
  StyledBottomText,
  StyledGreetings,
  StyledHeader,
  StyledHeaderFirstSentence,
  StyledHeaderSecondSentence
} from "./styles";
import ImageGreetings from "../images/image-greetings.jpg";

export class Greetings extends React.Component {
  state = {
    show: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (
      <StyledGreetings image={ImageGreetings}>
        <StyledHeader>
          <StyledHeaderFirstSentence>
            <ReactRevealText
              show={this.state.show}
              transitionTime={2000}
              delayMin={0}
              delayMax={1000}
            >
              Hi! I'm Mika.
            </ReactRevealText>
          </StyledHeaderFirstSentence>
          <StyledHeaderSecondSentence>
            <ReactRevealText
              show={this.state.show}
              transitionTime={2000}
              delayMin={1000}
              delayMax={2000}
            >
              I build web applications.
            </ReactRevealText>
          </StyledHeaderSecondSentence>
        </StyledHeader>
        <StyledBottom>
          <StyledBottomText>
            <ReactRevealText
              show={this.state.show}
              transitionTime={2000}
              delayMin={2000}
              delayMax={3000}
            >
              Learn more about what I do
            </ReactRevealText>
          </StyledBottomText>
          <StyledArrow>
            <ReactRevealText
              show={this.state.show}
              transitionTime={2000}
              delayMin={2000}
              delayMax={3000}
            >
              ˅
            </ReactRevealText>
          </StyledArrow>
        </StyledBottom>
      </StyledGreetings>
    );
  }
}
Greetings.displayName = "Greetings";

export default Greetings;
