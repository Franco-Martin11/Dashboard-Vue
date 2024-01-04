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
    backgroundImage: {
      'card-pattern': "url('src/assets/icons/mask-group-card.svg')"
    },
    colors: {
      'Pallet-Purple': '#51459E',
      'Pallet-Cyan': '#84E8F4',
      'Pallet-Orange': '#ff49db',
      'Pallet-Red': '#ff49db',
      'Heading-Purple': '#505887',
      'Subtitle-Gray': '#9698AB',
      'Head-UserGray': '#5B5B5B',
      'grey': "#9a9a9a",
      'purple': "#5e25bc",
      "skin-1": "#f9be7a",
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
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        formFields: 'repeat(auto-fill, minmax(175px, 1fr))',
        invoiceCardContainer: 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  plugins: []
}
