import { Container } from 'components/common';
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import ContactForm from './ContactForm';
import { Details, Thumbnail, Wrapper } from './styles';

const BASE_ASSETS_DIR = "../../../assets"
export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contact me</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <StaticImage src={`${BASE_ASSETS_DIR}/illustrations/contact.svg`} alt="Contact me" />
    </Thumbnail>
  </Wrapper>
);
