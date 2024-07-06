// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Bebas' : '"Bebas Neue", sans-serif',
      'Montserrat' : '"Montserrat", sans-serif',
      'Poppins' : '"Poppins", sans-serif',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../components/img/bghome.png')",
      }
    },
  },
  plugins: [],
}