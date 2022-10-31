/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: ['*.html'],
  purge: {
     enabled: true,
     content: ['**/*.html'],
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  }
}
