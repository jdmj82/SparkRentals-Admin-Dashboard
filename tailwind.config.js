/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBlue: "#150050",
        sidebarHover: "#220181",
        sidebarActive: "#0b002b",
      },
    },
  },
  plugins: [],
};
