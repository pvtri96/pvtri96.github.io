import jsFrameworks from "assets/illustrations/jsframeworks.svg";
import onlineCv from "assets/illustrations/online-cv.svg";
import { Button, Container } from "components/common";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "providers/ThemeProvider";
import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Details, SkillsWrapper, Thumbnail, Wrapper } from "./styles";

const BASE_ASSETS_DIR = "../../../assets";
export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <StaticImage src={`${BASE_ASSETS_DIR}/img/A12-Architektur.png`} alt="A12 introduction" placeholder="none" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Working at mgm technology partners</h1>
          <p>
            The mgm A12 Enterprise Low Code Platform allows you to develop and use complex enterprise applications more
            efficiently and innovatively throughout their entire life cycle.
          </p>
          <Button as="a" href="https://www.mgm-tp.com/">
            See more
          </Button>
        </Details>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>Working for myself</h1>
          <p>
            I aim to always keep myself up-to-date with the latest development trends. Interested in React, Cypress,
            Webpack, CI/CD (e.g.: Jenkins, Github Actions), Cloud solution (e.g.: GCP)...
          </p>
          <Button as={AnchorLink} href="#projects">
            See some of my projects
          </Button>
        </Details>
        <Thumbnail>
          <img src={jsFrameworks} alt="Personal hobby" />
        </Thumbnail>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={onlineCv} alt="CV" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>CV</h1>
          <p>My CV is ready to be downloaded using the link below.</p>
          <Button as="a" href="/cv.pdf">
            Download
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
