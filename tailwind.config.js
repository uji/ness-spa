const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffc738',
        secondary: '#4ab1ff',
        yellow: {
          400: '#ffc738',
        },
        blue: {
          500: '#4ab1ff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
