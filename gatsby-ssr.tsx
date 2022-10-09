import { GatsbySSR } from "gatsby";
import React from "react";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const wrapRootElement: GatsbySSR["wrapPageElement"] = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
