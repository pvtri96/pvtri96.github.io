import { GatsbyBrowser } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const onServiceWorkerUpdateReady: GatsbyBrowser["onServiceWorkerUpdateReady"] = () => window.location.reload();

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
