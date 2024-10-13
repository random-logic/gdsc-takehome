import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'footer-white': '#F9F9F9',
        grey: '#555555',
        blue: '#3182CE',
        'dark-blue': '#184065',
        black: '#000000',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        h1: '68px',
        h2: '40px',
        h3: '28px',
        p1: '20px',
        p2: '18px',
        p3: '14px',
      },
    },
  },
  plugins: [],
};
export default config;
