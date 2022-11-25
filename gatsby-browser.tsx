import "react-toastify/dist/ReactToastify.css";
import { GatsbyBrowser } from "gatsby";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import { ThemeProvider } from "./src/providers/ThemeProvider";

export const onServiceWorkerUpdateReady: GatsbyBrowser["onServiceWorkerUpdateReady"] = () => {
  toast.info(
    <>
      This page has a new update which shall be automatically applied the next time you reload the browser.
      <br />
      Click here if you want to reload it now?
    </>,
    { autoClose: false, position: "bottom-left", onClick: () => window.location.reload() }
  );
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => (
  <>
    {element}
    <ToastContainer />
  </>
);
