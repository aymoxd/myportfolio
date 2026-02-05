/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class', // نقل خاصية المظهر الداكن
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // نقل الخط الخاص بك
      },
    },
  },
  plugins: [],
}