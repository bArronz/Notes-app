/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //color in project
      colors: {
        primary: '#2b85ff',
        secondery: '#ef863e',
      }
      
    },
  },
  plugins: [],
}

