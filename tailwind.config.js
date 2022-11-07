/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#141d2f",
        lightBlue: "#1e2a47",
        primary: "#0079ff",
        light: "#f6f8ff",
        primaryLight: "#4b6a9b",
      },
    },
  },
  plugins: [],
};
