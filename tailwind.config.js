/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  plugins: ["nativewind/babel"],
  fontFamily: {
    pthin: ["Poppins-Thin", "sans-serif"],
    pextralight: ["Poppins-ExtraLight", "sans-serif"],
    plight: ["Poppins-Light", "sans-serif"],
    pregular: ["Poppins-Regular", "sans-serif"],
    pmedium: ["Poppins-Medium", "sans-serif"],
    psemibold: ["Poppins-SemiBold", "sans-serif"],
    pbold: ["Poppins-Bold", "sans-serif"],
    pextrabold: ["Poppins-ExtraBold", "sans-serif"],
    pblack: ["Poppins-Black", "sans-serif"],
  },
  


}

