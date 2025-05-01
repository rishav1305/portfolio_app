/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        braggadocio: ['Braggadocio W01', 'Braggadocio', 'Impact', 'Arial Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}