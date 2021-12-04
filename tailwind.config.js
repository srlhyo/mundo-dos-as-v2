const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
          img1:
          "url('./src/images/img-1.jpeg')",
          img2:
          "url('./src/images/img-2.jpeg')",
          img3:
          "url('./src/images/img-3.jpeg')",
          img4:
          "url('./src/images/img-4.jpeg')",
          img5:
          "url('./src/images/img-5.jpeg')",
          img6:
          "url('./src/images/img-6.jpeg')",
          waveBg:
          "url('./src/images/bg.jpg')",
      },
    },
    fontFamily: {
    'schoolbell': ['Schoolbell', 'sans-serif'],
    },
    colors: {
      pink: {
        light: "#fbaf97",
        medium: '#e86f6f',
        bright: '#fbbebd',
      },
      white: '#fff',
      red: colors.red,
      gray: colors.gray,
      golden: '#ecbd17',
      palepink: '#fde5e5',
      lightyellow: '#fbe196',
    }
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
