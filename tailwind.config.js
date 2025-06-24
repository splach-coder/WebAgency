/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#DAD7CD',
          DEFAULT: '#A3B18A',
          dark: '#588157',
          darker: '#3A5A40',
          deepest: '#344E41',
        }
      },
      keyframes: {
        gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        animation: {
          gradient: 'gradient 8s linear infinite'
        },
    },
  },
  plugins: [],
}


