/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        rye: "Rye",
        slab: ['"Roboto Slab"'],
      },
    },
  },
  plugins: [],
};
