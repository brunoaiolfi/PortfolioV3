/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],  
  theme: {
    extend: {
      colors: {
        primary: '#FBFCFF',
        secondary: '#1D263E',
        tertiary: '#2D5FDE',
      },
      fontFamily: {
        'mona': ['Mona sans', 'sans-serif'],
        'mona-black': ['Mona black', 'sans-serif']        
      }
    },
  },
  plugins: [],
}

