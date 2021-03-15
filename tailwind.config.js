const color = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    enabled: false,
    preserveHtmlElements: false,
    content: [
      "./public/index.html",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.tsx",
      "./src/**/*.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
        cyan: color.cyan
      },
      fontFamily: {
        sans: ["'Mulish'", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
