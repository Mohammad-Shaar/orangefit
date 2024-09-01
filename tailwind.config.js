/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1180px",
    },
    extend: {
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
