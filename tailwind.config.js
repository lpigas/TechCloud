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
      "35vw": "35vw",
      "75vh": "75vh",
      "90vh": "90vh",
    },
    maxWidth: {
      cta: "400px",
      xxs: "275px",
      xs: "500px",
      text: "650px",
      quote: "750px",
      title: "850px",
      readable: "65ch",
      screen: "100vw",
      accordion: "850px",
      full: "100%",
      "1/2": "50%",
      half: "75%",
      "35vw": "35vw",
      "50vw": "50vw",
      "60vw": "60vw",
      "75vw": "75vw",
      "90vw": "90vw",
      ...defaultTheme.screens,
    },
    minWidth: {
      0: "0",
      full: "100%",
      side: "200px",
      xxxs: "275px",
      xxs: "375px",
      sidebar: "315px",
      full: "100%",
      alf: "75%",
      "1920px":"1920px",
      "35vw": "35vw",
      "60vw": "60vw",
      "50vh": "50vh",
      "60vh": "60vh",
      "75vw": "75vw",
      "75vh": "75vh",
      "90vh": "90vh",
      "180vh": "180vh",
      "200vh": "200vh",
      "230vh": "230vh",
    },
    minHeight: {
      0: "0",
      "1/2": "50vw",
      full: "100%",
      "75vh": "75vh",
      "90vh": "90vh",
      "40vh": "40vh",
    },
    screens: {
      sm: "100px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
      // => @media (min-width: 1024px) { ... }
      ser:"1100px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
