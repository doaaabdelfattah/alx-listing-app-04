const { HERO_IMAGE, HERO_IMAGE_MOBILE } = require('./constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        "primary-black": "#444444",
        "primary-green": "#34967C",
        "primary-gold": "#FFA800",
        "primary-grey": "#DCDCDC",
        "primary-light-grey": "#F9F9F9",
        "primary-border": '#F6F6F6',
        "primary-white": "#FFFFFF",
        "primary-border": "#ECECEC",
      },
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }

        'tablet': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        HERO: `url('${HERO_IMAGE}')`,
        HERO_MOBILE: `url('${HERO_IMAGE_MOBILE}')`,
      },
    },
  },
  plugins: [],
};
