/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC313D",
        secondary: "#F7C5CC",
        tertiary: "#FF6347",
      },
      fontFamily: {
        heading: ["Bricolage Grotesque"],
      },
    },
  },
  plugins: [],
};
