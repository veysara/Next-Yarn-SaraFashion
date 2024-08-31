import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#085E9F',
        secondary: '#2A7548',
        white: '#ffffff',
        content: '#000000B2',
        contentDesc: '#00000066',
        greenPigment: {
          100: '#F2F8F3',
          200: '#E4F0E7',
          300: '#C6E0CC',
          400: '#A1CEAD',
          500: '#72BB87',
          600: '#00A650',
          700: '#009448',
          800: '#00813E',
          900: '#006933',
          1000: '#004A24',
        },
        sunflowerIsland: {
          100: '#FFFAF2',
          200: '#FFF5E4',
          300: '#FFECC6',
          400: '#FFE1A1',
          500: '#FFD672',
          600: '#FFCB04',
          700: '#E4B604',
          800: '#C69D03',
          900: '#A18003',
          1000: '#725B02',
        },
        black: {
          100: '#1E1E1E',
          200: '#1E1E1E',
          300: '#C7C7C7',
          400: '#A5A5A5',
          500: '#787878',
          600: '#2B2B2B',
          700: '#262626',
          800: '#212121',
          900: '#1B1B1B',
          1000: '#131313',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(90deg, #085E9F 0%, #2A7548 100%)",
        // 'custom-gradient': 'linear-gradient(50deg, #fff 0%, rgba(8, 94, 159, 0.5) 50%, rgba(41, 117, 72, 0.5) 100%)',

      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
