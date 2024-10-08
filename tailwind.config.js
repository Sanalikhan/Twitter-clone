/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./build/*.html'],
  theme: {
    extend: {
    padding:{
      '13': '3.75rem',
      '15': '5.45rem'
    }
    },
  },
  plugins: [],
}

