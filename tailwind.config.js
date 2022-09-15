const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        header: "1185px",
      },
    },
    maxHeight: {
      0: "0",
      4: "250px",
      half: "50%",
      full: "100%",
      screen: "100vh",
      "50vh": "50vh",
      "75vh": "75vh",
      "90vh": "90vh",
    },
    maxWidth: {
      cta: "400px",
      xxs: "375px",
      xs: "500px",
      text: "650px",
      quote: "750px",
      title: "850px",
      readable: "65ch",
      screen: "100vw",
      accordion: "850px",
      full: "100%",
      "40vw": "40vw",
      "50vw": "50vw",
      "60vw": "60vw",
      "75vw": "75vw",
      "90vw": "90vw",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
