import contact from "assets/illustrations/contact.svg";
import { Container } from "components/common";
import React from "react";
import ContactForm from "./ContactForm";
import { Details, Thumbnail, Wrapper } from "./styles";

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contact me</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Contact me" />
    </Thumbnail>
  </Wrapper>
);
