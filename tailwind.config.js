/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { leaf: {400:"#34d399",500:"#10b981",600:"#059669"} },
      boxShadow: { soft: "0 20px 60px -20px rgba(0,0,0,.45)" }
    }
  },
  plugins: [],
};