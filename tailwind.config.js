/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0A3C30',
          deep: '#031A15',
          night: '#02100D',
          jade: '#0E5243',
          peacock: '#0F6B58',
          mint: '#A7F3D0',
        },
        champagne: {
          DEFAULT: '#E5C158',
          light: '#FBF0C4',
          bright: '#FFE57F',
          antique: '#B68D2C',
          bronze: '#8A661B',
        },
        pearl: {
          DEFAULT: '#F4FBF7',
          ivory: '#FFFDF7',
          lotus: '#FCE7F3',
        },
        lotus: {
          DEFAULT: '#EC4899',
          blush: '#F472B6',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', 'Georgia', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        flameDance: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1) rotate(-1deg)', opacity: '0.96' },
          '30%': { transform: 'scaleY(1.1) scaleX(0.93) rotate(1.5deg)', opacity: '1' },
          '60%': { transform: 'scaleY(0.93) scaleX(1.05) rotate(-1deg)', opacity: '0.88' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s infinite linear',
        floatGentle: 'floatGentle 5.5s ease-in-out infinite',
        flameDance: 'flameDance 2.1s ease-in-out infinite',
        spinSlow: 'spinSlow 50s linear infinite',
      }
    },
  },
  plugins: [],
}
