/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      fontFamily: {
        'Roboto': "'Roboto Condensed', 'sans-serif'",
        'Oswald': "'Oswald', 'sans-serif'",
        'Quicksand': "'Quicksand', 'sans-serif'",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

