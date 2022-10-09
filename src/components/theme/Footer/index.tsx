import React from "react";
import { Container } from "components/common";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import config from "data/config";
import { Wrapper, Flex, Links, Details } from "./styles";

export const social = [
  {
    id: 1,
    name: "Github",
    link: config.socialLinks.github,
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "Linkedin",
    link: config.socialLinks.linkedin,
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Facebook",
    link: config.socialLinks.facebook,
    icon: <FaFacebook />,
  },
];

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Tri Van Pham</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by{" "}
          <a href="https://tripham.dev" rel="noopener noreferrer" target="_blank">
            pvtri96
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            {icon}
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
