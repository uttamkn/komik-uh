/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero-image.jpg')",
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
      },
      fontFamily: {
        heading2: ["Bricolage Grotesque"],
        roboto: ["Roboto"],
        heading: ["Bento"],
      },
      inset: {
        "2/10": "20%",
      },
      boxShadow: {
        "white-bottom":
          "0 6px 8px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
