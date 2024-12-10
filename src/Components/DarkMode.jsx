import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import { useTheme } from "../contexts/theme.context";

export const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      {isDarkMode ? (
        <img src={iconSun} onClick={toggleTheme} alt="sun light mode icon " />
      ) : (
        <img src={iconMoon} onClick={toggleTheme} alt="moon dark mode icon " />
      )}
    </div>
  );
};
