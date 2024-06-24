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
        heading: ["Bricolage Grotesque"],
      },
      inset: {
        "2/10": "20%",
      },
      keyframes: {
        autoRotate: {
          "0%": {
            transform: "perspective(40rem) rotateX(-18deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(40rem) rotateX(-18deg) rotateY(360deg)",
          },
        },
      },
      animation: {
        autoRotate: "autoRotate 30s linear infinite",
      },
    },
  },
  plugins: [],
};
