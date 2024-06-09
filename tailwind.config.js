/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fulloffice': "url('/src/assets/Background.png')",
        
      },
      colors: {
        'red': '#e16d6d',
        'black': '#3F3939',
      },
    },
    
  },
  plugins: [],
}

