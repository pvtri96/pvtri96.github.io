import React from "react";
import { Layout, SEO } from "components/common";
import { toast } from "react-toastify";
import { Intro, Skills, Contact, Projects } from "components/landing";

export default function MainPage() {
  React.useEffect(() => {
    toast.info(
      <>
        This page has a new update which shall be automatically applied the next time you reload the browser.
        <br />
        Click here if you want to reload it now?
      </>,
      { autoClose: false, position: "bottom-left", onClick: () => window.location.reload() }
    );
  }, []);

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
