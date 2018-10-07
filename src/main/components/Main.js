import React from "react";

import Greetings from "app/greetings/components";
import ProjectPhoto from "app/projectPhoto";
import Skills from "app/skills/components";
import Footer from "app/footer/components";

import ErrorBoundary from "./ErrorBoundary";
import { StyledHeaderOfSections, StyledMain } from "./styles";
import ImageWithoutWater from "../images/image-without-water.jpg";
import ImageFunnyFarm from "../images/image-funny-farm.jpg";
import ImageMovies from "../images/image-movies.jpg";
import ImagePomodoro from "../images/image-pomidoro.jpg";
import {
  descriptionPomodoroTimer,
  descriptionWithoutWater,
  descriptionFunnyFarm,
  descriptionMovies
} from "../constants";

export const Main = () => (
  <StyledMain>
    <ErrorBoundary>
      <Greetings />
      <StyledHeaderOfSections>My Recent Projects</StyledHeaderOfSections>
      <ProjectPhoto
        description={descriptionPomodoroTimer}
        image={ImagePomodoro}
        textColor={"white"}
        link={"https://github.com/mlobunko/pomodoro-timer"}
        nameOfProject={"Pomodoro Timer"}
        margin={true}
        textUp={true}
      />
      <ProjectPhoto
        description={descriptionWithoutWater}
        image={ImageWithoutWater}
        textColor={"white"}
        link={"https://github.com/mlobunko/without-water"}
        nameOfProject={"Without Water"}
        textUp={true}
        margin={true}
      />
      <ProjectPhoto
        description={descriptionMovies}
        image={ImageMovies}
        textColor={"white"}
        link={"https://github.com/mlobunko/movies"}
        nameOfProject={"Movies"}
        margin={true}
      />
      <ProjectPhoto
        description={descriptionFunnyFarm}
        image={ImageFunnyFarm}
        link={"https://github.com/mlobunko/funny-farm"}
        nameOfProject={"Funny Farm"}
        textColor={"black"}
        textUp={true}
      />

      <StyledHeaderOfSections>My Skills</StyledHeaderOfSections>
      <Skills />
      <Footer />
    </ErrorBoundary>
  </StyledMain>
);

Main.displayName = "Main";

export default Main;
