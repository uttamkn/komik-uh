/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
      },
      fontFamily: {
        heading: ["Bricolage Grotesque"],
      },
    },
  },
  plugins: [],
};
