/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // هذا يجعل الخط الافتراضي sans هو Poppins
      },
    },
  },
  plugins: [],
}

