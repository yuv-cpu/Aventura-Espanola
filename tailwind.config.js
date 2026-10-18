/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fiesta: {
          red: '#C60B1E',
          yellow: '#FFC400',
          amber: '#F59E0B',
          navy: '#1D3557',
          teal: '#2A9D8F',
          terracotta: '#E07A5F',
          sand: '#F4F1DE',
          dark: '#1A1A24',
          card: '#242436',
          border: '#3A3A52'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

