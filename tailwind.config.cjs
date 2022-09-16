/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "custom-purple": "#D6D5A8",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [
    // ...
  ],
};
