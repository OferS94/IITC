/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-orange': 'hsl(25, 97%, 53%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
      'neutral-light-grey': 'hsl(217, 12%, 63%)',
      'neutral-dark-blue': 'hsl(213, 19%, 18%)',
      'neutral-dark-blue-light': 'hsl(213, 19%, 25%)',
      'neutral-very-dark-blue': 'hsl(216, 12%, 8%)',
    },
    extend: {
      // fontFamily: {
      //   Overpass : ["Overpass-bold-700" , "Overpass"],
      //   Overpass : ["Overpass-bold-700" , "Overpass"],
      // },
    },
  },
  plugins: [],
}

