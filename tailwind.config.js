/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000',
      'blue': '#6854FC',
      'lightBlue':'#BED3FF',
      '2xlLightBlue':'#F0EEFF',
      'gray':'#C4C4C426',
      'lightCyan':'#AEE2FF',
      'yellow':'#FFE600',
      'lightYellow':'#FFEEA6',
      'lightBrown':'#FCEDEE',
      'lightGreen':'#DEFEEA',
      'FooterColor':'#0A142F'
    }
  },
  plugins: [],
}