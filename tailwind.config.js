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
    },
  },
  plugins: [],
}
