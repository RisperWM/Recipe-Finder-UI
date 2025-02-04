/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/black.jpg')",
      },
      boxShadow: {
        'blue-lg': '0 10px 15px -3px rgba(59, 130, 246, 0.7), 0 4px 6px -2px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}

