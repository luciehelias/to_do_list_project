import React, { createContext, useState, useContext, useMemo } from "react";

const ThemeContext = createContext();

const darkModeStyles = {
  backgroundApp: "bg-mobile-dark md:bg-desktop-dark bg-dark-veryDarkBlue",
  borderCircleColor: "border-dark-veryDarkGrayishBlue2 border",
  backgroundInputColor: "bg-dark-veryDarkDesaturatedBlue",
  borderBottomInputColor: "border-b-dark-veryDarkGrayishBlue1 border-b",
  backgroundTaskActionColor: "bg-dark-veryDarkDesaturatedBlue",
  hoverTaskActionColor: "hover:text-dark-lightGrayishBlue",
  deleteCrossColor: "text-dark-veryDarkGrayishBlue1",
};

const lightModeStyles = {
  backgroundApp: "bg-mobile-light md:bg-desktop-light",
  borderCircleColor: "border-light-lightGrayishBlue border",
  backgroundInputColor: "bg-white",
  borderBottomInputColor: "border-b-light-lightGrayishBlue border-b",
  backgroundTaskActionColor: "bg-white",
  hoverTaskActionColor: "hover:text-light-veryDarkGrayishBlue",
  deleteCrossColor: "text-light-darkGrayishBlue",
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  const styles = useMemo(
    () => (isDarkMode ? darkModeStyles : lightModeStyles),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        styles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
