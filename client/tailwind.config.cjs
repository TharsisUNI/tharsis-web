module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': "Montserrat, sans-serif",
      },
      colors: {
        'brand': {
          'orange': '#E8684B',
          'black':'#030303',
          'red': '#A73732',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}
