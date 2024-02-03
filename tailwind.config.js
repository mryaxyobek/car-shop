/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#E70A32',
        '111': '#111'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      maxWidth: {
        'base': '1210px'
      },
      backgroundImage: {
        'heroBg': "linear-gradient(180deg, rgba(9, 9, 9, 0.5) 0%, #09161F 1000%), url('./img/heroBg.jpg')"
      },
      boxShadow: {
        'header-shadow': '0px 5px 20px 0px rgba(44, 41, 51, 0.10)',
      }
    },
    screens: {
      1000: '1000px',
      768: '768px',
      640: '640px',
      410: '410px',
      360: '360px',
    },
  },
  plugins: [],
}