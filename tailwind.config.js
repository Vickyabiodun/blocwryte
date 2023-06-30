/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        secondary: "#6AEDAB",
        primary: "#013A37",
      },
    },
  },
  plugins: [],
};
