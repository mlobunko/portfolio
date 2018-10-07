import React from "react";

import Social from "./Social";
import { StyledFooter } from "./styles";
import * as constants from "../constants";
import * as icons from "../icons";

export const Footer = () => (
  <StyledFooter>
    <Social
      iconComponent={icons.IconGitHub}
      link={constants.linkToGitHub}
      name={"GitHub"}
    />
    <Social
      iconComponent={icons.IconMail}
      link={`mailto:${constants.linkToMail}`}
      name={"Mail"}
    />
    <Social
      iconComponent={icons.IconLinkedIn}
      link={constants.linkToLinkedIn}
      name={"LinkedIn"}
    />
  </StyledFooter>
);

export default Footer;
