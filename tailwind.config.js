/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        net:{
          'grey-400':'#333',
          'black-400':'#121212'
        }
      },
      fontSize:{
        '22':'22px'
      }
    },
  },
  plugins: [],
}

