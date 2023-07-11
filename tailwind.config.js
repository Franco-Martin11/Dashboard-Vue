/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'Pallet-Purple':'#51459E',
      'Pallet-Cyan': '#84E8F4',
      'Pallet-Orange': '#ff49db',
      'Pallet-Red': '#ff49db',
      'Heading-Purple': '#505887',
      'Subtitle-Gray': '#9698AB',
      'Head-UserGray': '#5B5B5B',
    },
    fontFamily: {
      'heading-bold': ['Google Sans Bold', 'sans-serif'],
      'body-regular': ['Google Sans Regular', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
