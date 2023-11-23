/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
    letterSpacing: {
      wide: '.02em',
    },
    fontSize: {
      xxs: '0.7rem',
    }
  },
  plugins: [],
}

