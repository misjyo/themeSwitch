import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme1 } from "../themes/theme1";
import { theme2 } from "../themes/theme2";
import { theme3 } from "../themes/theme3";

interface ThemeContextType {
  themeName: string;
  setTheme: (name: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeName, setThemeName] = useState("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "theme1";
    setThemeName(savedTheme);
  }, []);

  const setTheme = (name: string) => {
    setThemeName(name);
    localStorage.setItem("app-theme", name);
  };

  const themes = { theme1, theme2, theme3 };
  const currentTheme = themes[themeName as keyof typeof themes];

  return (
    <ThemeContext.Provider value={{ themeName, setTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
