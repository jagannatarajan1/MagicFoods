/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headFont: ["Elsie", "serif"],
        paraFont: ["Lexend", "ssans-serif"],
      },
      colors: {
        primary: "#ffdd59",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
