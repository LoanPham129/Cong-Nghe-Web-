/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mintBlue: '#DEF0FA',
        lpBlue: 'rgb(30 64 175)'
      },
      listStyleType:{
        square: 'square',
      }
    },
  },
  plugins: [],
}

