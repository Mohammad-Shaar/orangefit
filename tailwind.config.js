/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      OpenSance: ["Open Sans, sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1180px",
    },
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(+100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translatey(+15%)", opacity: "0" },
          "100%": { transform: "translatey(0)", opacity: "1" },
        },
        opacityIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        slideInTop: "slideInTop 1s ease-out forwards",
        opacityIn: "opacity 1s ease-out forwards",
      },
      borderRadius: {
        custom: "100%",
      },
      width: {
        custom: "calc(100% + 8px)",
      },
      colors: {
        "custom-dark": "#1C1B1E",
      },
    },
  },
  plugins: [],
};
