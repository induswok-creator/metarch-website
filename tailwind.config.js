/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070b',
          900: '#090d14',
          800: '#0e1420',
          700: '#161e2e',
          600: '#1f2938',
        },
        heat: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#f97316',
          700: '#ea580c',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
