/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGunmetal: "#1D1E2B",
        gunMetal: "#2F3039",
        turquoise: "#41E4BD",
        aquamarine: "#64FFDA",
        paleBlue: "#ADF1ED",
        water: "#C6FAF7",
        waterSpout: "#99FFFF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
