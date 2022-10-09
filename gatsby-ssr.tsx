import "react-toastify/dist/ReactToastify.css";
import { GatsbySSR } from "gatsby";
import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const wrapRootElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <ThemeProvider>
    {element}
    <ToastContainer />
  </ThemeProvider>
);
