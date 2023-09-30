/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "560",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1180px",
        // => @media (min-width: 1024px) { ... }

        xl: "1450px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1736px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
      },
    },
  },
  plugins: [],
};
