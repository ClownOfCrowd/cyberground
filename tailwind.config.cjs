/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: "#0d0d0d",
          green: "#00FF41",
          greenDark: "#008f2a",
        },
      },
      fontFamily: {
        mono: ['"Courier New"', "Monaco", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};

