/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-Pale-blue': 'hsl(225, 100%, 94%)',
      'primary-Bright-blue' : 'hsl(245, 75%, 52%)',
      'neutral-Very-pale-blue': 'hsl(225, 100%, 98%)',
      'neutral-Desaturated-blue': 'hsl(224, 23%, 55%)',
      'neutral-Dark-blue' : 'hsl(223, 47%, 23%)',
  },
    extend: {
    },
  },
  plugins: [],
}

