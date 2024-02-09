/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      xs: "370px",
      md: "720px",
    },
    fontFamily: {
      gloria: ["Gloria Hallelujah", "sans-serif"],
    },
  },
  plugins: [],
};
