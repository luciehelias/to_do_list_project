import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour basculer entre les modes clair et sombre
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const backgroundApp = () => {
    if (isDarkMode) {
      return "bg-mobile-dark md:bg-desktop-dark bg-dark-veryDarkBlue ";
    }
    return "bg-mobile-light md:bg-desktop-light";
  };

  const borderCircleColor = () => {
    if (isDarkMode) {
      return "border-dark-veryDarkGrayishBlue2 border";
    }
    return "border-light-lightGrayishBlue border";
  };

  const backgroundInputColor = () => {
    if (isDarkMode) {
      return "bg-dark-veryDarkDesaturatedBlue";
    }
    return "bg-white";
  };

  const borderBottomInputColor = () => {
    if (isDarkMode) {
      return "border-b-dark-veryDarkGrayishBlue1 border-b";
    }
    return "border-b-light-lightGrayishBlue border-b";
  };

  const backgroundTaskActionColor = () => {
    if (isDarkMode) {
      return "bg-dark-veryDarkDesaturatedBlue";
    }
    return "bg-white";
  };

  const hoverTaskActionColor = () => {
    if (isDarkMode) {
      return "hover:text-dark-lightGrayishBlue";
    }
    return "hover:text-light-veryDarkGrayishBlue";
  };

  const deleteCrossColor = () => {
    if (isDarkMode) {
      return "text-dark-veryDarkGrayishBlue1";
    }
    return "text-light-darkGrayishBlue";
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        borderCircleColor,
        backgroundInputColor,
        borderBottomInputColor,
        backgroundTaskActionColor,
        hoverTaskActionColor,
        backgroundApp,
        deleteCrossColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
