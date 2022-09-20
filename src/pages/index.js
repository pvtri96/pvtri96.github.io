import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";

export default function MainPage() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
