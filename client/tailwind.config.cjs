/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        customRed1: "#e5383b",
        customRed2: "##ba181b",
        customRed3: "#a4161a",
        customRed4: "#660708",
        customBlack: "#0b090a",
        customBlack1: "#161a1d",
        customWhite1: "#ffffff",
        customWhite2: "#f5f3f4",
        customWhite3: "#d3d3d3",
        customWhite4: "#b1a7a6",
      },
    },
  },
  plugins: [],
};
