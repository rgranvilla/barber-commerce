/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        rye: "Rye, serif",
        slab: ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
};
