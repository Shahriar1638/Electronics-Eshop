/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sofia: "'Sofia Sans Condensed', sans-serif;"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light","dark"],
  },
}

