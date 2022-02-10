module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': '260px',
      // => @media (min-width: 260px) { ... }
      'xss': '320px',
      // => @media (min-width: 320px) { ... }
      'xsm': '380px',
      // => @media (min-width: 380px) { ... }
      'xsl': '520px',
      // => @media (min-width: 520px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdl': '785px',
      // => @media (min-width: 785px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
