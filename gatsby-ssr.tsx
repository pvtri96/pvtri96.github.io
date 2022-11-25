import { GatsbySSR } from "gatsby";
import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <>
    {element}
    <ToastContainer />
  </>
);
