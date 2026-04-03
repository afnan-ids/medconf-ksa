/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-main)",
        card: "var(--bg-card)",
        text: "var(--text-main)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};