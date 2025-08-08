/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyanBlueStart: '#0ea5e9',
        cyanBlueEnd: '#14b8a6',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(14,165,233,1) 0%, rgba(20,184,166,0.35) 60%, rgba(14,165,233,0.9) 100%)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};


