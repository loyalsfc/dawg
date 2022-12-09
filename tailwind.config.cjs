/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#2fc6d5',
        'primary-dark': '#159505',
      },
      fontFamily:{
        lato: ['Lato', 'sans-serif'],
        stix: ['STIX Two Text', 'serif'],
      }
    },
  },
  plugins: [],
}
