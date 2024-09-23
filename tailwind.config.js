/** @type {import('tailwindcss').Config} */
import tailwindcssScrollbar  from 'tailwindcss-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter','sans-serif']
      },
      zIndex: {
        '-90': '-90',
      },
    },
  },
  plugins: [tailwindcssScrollbar],
}