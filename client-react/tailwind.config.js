import formsPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        rmono: ["Roboto Mono", "sans-serif"],
      },
      colors: {
        almostblack: "#1e1e1e",
        bggray: "#E5E9E6",
        accent: "#F6E58D",
      },
    },
  },
  plugins: [formsPlugin],
};
