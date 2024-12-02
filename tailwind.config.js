/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-light": "url('/assets/images/bg-desktop-light.jpg')",
        "mobile-light": "url('/assets/images/bg-mobile-light.jpg')",
        "desktop-dark": "url('/assets/images/bg-desktop-dark.jpg')",
        "mobile-dark": "url('/assets/images/bg-mobile-dark.jpg')",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"], // Définit Josefin Sans comme police par défaut
      },
      colors: {
        light: {
          veryLightGray: "hsl(0, 0%, 98%)",
          veryLightGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        },
        dark: {
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          lightGrayishBlueHover: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
        },
      },
    },
  },
  plugins: [],
};
