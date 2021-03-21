import { Button, Container } from 'components/common';
import { Header } from 'components/theme';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeContext } from 'providers/ThemeProvider';
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

const BASE_ASSETS_DIR = "../../../assets";
export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Tri and I’m a Frontend & Devops engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <StaticImage src={`${BASE_ASSETS_DIR}/illustrations/dev.svg`} alt="I’m Tri and I’m a Frontend & Devops engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
