/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        balatro: {
          red: '#FF3366',
          blue: '#00CCFF',
          dark: '#1a1a2e',
          darker: '#0f0f1e',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        game: ['"Bungee"', 'cursive'],
      },
    },
  },
  plugins: [],
}
