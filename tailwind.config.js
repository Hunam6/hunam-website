/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      colors: {
        gray: "#878787",
      },
    },
  },
  plugins: [],
};
