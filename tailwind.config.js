const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./pages/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
      screens: {
        print: { raw: "print" },
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
