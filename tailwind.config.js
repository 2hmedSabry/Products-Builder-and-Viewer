/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding :{
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        '2xl': "7rem",
      },
    },
    extend: {},
  },
  plugins: [],
}