/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "orbit": "orbit 8s linear infinite",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
