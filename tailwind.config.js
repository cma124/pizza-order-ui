/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#EFEFEF',
        black: {
          300: '#6E6D6B',
          500: '#1C1A18'
        },
        pinky: {
          300: '#E98084',
          500: '#DB383D',

        },
        yellowy: {
          300: '#ECA85D',
          500: '#E07903'
        }
      },
      fontFamily: {
        header: ['Rum Raisin', 'sans-serif'],
        body: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

