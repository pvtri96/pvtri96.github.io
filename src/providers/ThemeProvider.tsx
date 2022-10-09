import React, { createContext } from "react";
import useDarkMode from "hooks/useDarkMode";

export const ThemeContext = createContext<{
  theme: ReturnType<typeof useDarkMode>[0];
  toggleTheme: ReturnType<typeof useDarkMode>[1];
}>({
  theme: "light",
  toggleTheme: () => {
    throw new Error(`Cannot find ThemeContextProvider!`);
  },
});

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
