/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#AFF24B',
        darkgreen: '#013F16',
        green: '#B9D94A',
        brown: '#73483F',
        black: '#0D0D0D',
        red: '#AB0404',
      },
    },
  },
  plugins: [],
}
