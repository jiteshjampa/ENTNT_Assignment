/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ["Caveat, cursive"],
        Roboto: ["Roboto, sans-serif"],
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
    screens: {
      sm: "640px", // Small screens, mobile devices
      p: { max: "640px" },
      md: "768px", // Medium screens, tablets
      lg: "1024px", // Large screens, laptops/desktops
      xl: "1280px", // Extra large screens, larger desktops
      "2xl": "1536px", // Extra large screens, larger desktops
      // Add more custom breakpoints as needed
    },
  },
  plugins: [],
};
