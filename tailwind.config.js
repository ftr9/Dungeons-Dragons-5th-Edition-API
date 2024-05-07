/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato',sans-serif",
      },
      backgroundColor: {
        primary: '#040404',
        secondary: '#EFD58B',
        success: '#FA5252',
        danger: '#69DB7C',
      },
      colors: {
        primary: '#040404',
        secondary: '#EFD58B',
      },
    },
  },
  plugins: [],
};
