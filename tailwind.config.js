/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
        cultured: '#F8F8F8',
        eerieBlack: '#191B1E'
      },
    },
  },
  plugins: [],
}
