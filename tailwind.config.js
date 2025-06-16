import { base } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   sm: "576px",
      //   md: "960px",
      //   lg: "1440px",
      // },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        16: '4rem',
      },
      colors: {
        primary: {
          10: '#D2E9FF',
          20: '#B4DAFF',
          30: '#8EC7FF',
          40: '#69B5FF',
          50: '#44A2FF',
          base: '#1E90FF',
          70: '#1978D4',
          80: '#1460AA',
          90: '#0F4880',
          100: '#0A3055',
          110: '#061D33',
          DEFAULT: '#1E90FF',
        },
        secondary: {
          10: '#FFE2CC',
          20: '#FFCFAA',
          30: '#FFB780',
          40: '#FF9F55',
          50: '#FF9F55',
          60: '#3C9FFF',
          base: '#FF6F00',
          70: '#D45D00',
          80: '#AA4A00',
          90: '#803800',
          100: '#552500',
          110: '#331600',
          DEFAULT: '#FF6F00',
        },
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      fontFamily: {
        DM_Sans: ['"DM Sans"', 'sans-serif'],
        Space_Grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
