/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        logo: ['Qwigley', 'cursive'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};
