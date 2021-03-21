import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "providers/ThemeProvider";
import React, { useContext } from "react";
import { Wrapper } from "./styles";

const BASE_ASSETS_DIR = "../../../../assets";
const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      {theme === "light" ? (
        <StaticImage
          src={`${BASE_ASSETS_DIR}/icons/moon.svg`}
          alt={theme}
          theme={theme}
        />
      ) : (
        <StaticImage
          src={`${BASE_ASSETS_DIR}/icons/sun.svg`}
          alt={theme}
          theme={theme}
        />
      )}
    </Wrapper>
  );
};

export default ToggleTheme;
