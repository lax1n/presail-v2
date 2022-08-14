/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '528px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        kraftig: '\'SoehneKraftig\', sans',
        buch: '\'SoehneBuch\', sans',
        leicht: '\'SoehneLeicht\', sans',
        mono: '\'SoehneMonoLeicht\', sans',
      },
      colors: {
        gunMetal: '#2F3239',
        graniteGray: '#676767',
        orangeSoda: '#FC5F42',
        ultramarineBlue: '#4758FD',
        brightGray: '#ECECEC',
        granite: '#646464',
        cultured: '#F8F8F8',
        eerieBlack: '#191B1E',
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(4px)' },
        }
      },
      animation: {
        move: 'move 2s ease-in-out',
      }
    },
  },
  plugins: [],
}
