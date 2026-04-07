/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#07111f",
        panel: "#0b1728",
        accent: "#4fd1c5",
        accentBlue: "#60a5fa"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(2, 8, 23, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        rtl: ["var(--font-noto-sans-arabic)"]
      }
    }
  },
  plugins: []
}
