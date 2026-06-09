/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bridal: {
          bg: '#FFF8F2',        // Ivory / Warm White
          blush: '#F7DDE2',     // Soft Blush
          champagne: '#D8B16A', // Champagne Gold
          brown: '#3A2621',     // Deep Brown / Charcoal
          rose: '#B76E79',      // Muted Rose / Rose Gold
        }
      },
      keyframes: {
        blinkWave: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.1)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        blinkWave: 'blinkWave 2s infinite',
      },
    },
  },
plugins: [
  require('tailwind-scrollbar-hide')
]
};
