/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ppmoriLight: ['ppmori-extralight', 'sans-serif'],
        ppmori: ['ppmori-regular', 'sans-serif'],
        ppmoriSemibold: ['ppmori-semibold', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        desire: '#e63946',
        dark: '#242124',
      },
    },
  },
  plugins: [],
};
