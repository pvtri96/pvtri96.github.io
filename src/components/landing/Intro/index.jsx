import dev from 'assets/illustrations/dev.svg';
import { Button, Container } from 'components/common';
import { Header } from 'components/theme';
import { ThemeContext } from 'providers/ThemeProvider';
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Tri and I’m a Frontend developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Tri and I’m a Frontend developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
