import React, { createContext, useState, useEffect, useContext } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
