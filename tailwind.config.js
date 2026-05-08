/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // Amber Gold
        secondary: "#10b981", // Emerald
        background: "#081a14", // Deep Emerald Dark
        surface: "#112b20", // Slightly lighter emerald for cards
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
