import * as React from "react";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const onServiceWorkerUpdateReady = () => window.location.reload();

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
