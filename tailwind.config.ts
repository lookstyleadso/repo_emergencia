const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: {
          hv: "#f4f7f7",
        },
        primarycolor: {
          pc: "#1363df",
          hover: "#1A5BBF"
        },
        secundarycolor: {
          sc: "#47b5ff",
          hover: "#0D629A"
        },
        tertiarycolor: {
          tc: "#f33535",
          hover: "#C82626"
        },
        graycolor: {
          gc: "#70727c",
        },
        darkcolor: {
          dc: "#191b21",
        },
      },
      screens: {
        xs: "365px",
        xm: "400px",
        xd: "300px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

