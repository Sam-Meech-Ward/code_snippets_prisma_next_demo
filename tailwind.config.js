/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
