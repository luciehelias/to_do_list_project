import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/theme.context.jsx";
import { ScreenSizeProvider } from "./contexts/screenSize.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </ThemeProvider>
  </StrictMode>
);
