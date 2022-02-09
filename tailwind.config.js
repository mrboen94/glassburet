const colors = require("tailwindcss/colors");

module.exports = {
  tailwindConfig: "./tailwind.config.js",
  mode: "jit",
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./pages/**/*.js",
  ],
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
