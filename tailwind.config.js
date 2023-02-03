/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f8f32b",
        "light-grey": "#c5c5c5",
        "dark-grey": "#242423",
        dark: "#181817",
      },
      backgroundImage: {
        "stroke-mobile": 'url("/assets/stroke-mobile.svg")',
        "stroke-desktop": 'url("/assets/stroke-desktop.svg")',
      },
      spacing: {
        76: "19rem",
      },
      borderRadius: {
        "5xl": "2.5rem",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
