/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {},
        secondary: {},
      },
      screens: {
        xs: '430px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
}
