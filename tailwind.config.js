/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

module.exports = {
  content: ['layouts/**/*.htm', 'pages/**/*.htm', 'partials/**/*.htm'],
  safelist: ['prose', 'prose-sm', 'prose-md', 'prose-lg'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '4rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '12rem',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        base: {
          100: colors.gray[100],
          200: colors.gray[200],
          300: colors.gray[400],
          content: colors.gray[500],
        },
        primary: {
          DEFAULT: colors.purple[600],
          focus: colors.purple[700],
          content: colors.purple[50],
        },
        secondary: {
          DEFAULT: colors.lime[500],
          focus: colors.lime[600],
          content: colors.lime[50],
        },
        accent: {
          DEFAULT: colors.amber[400],
          focus: colors.amber[500],
          content: colors.amber[50],
        },
        neutral: {
          DEFAULT: colors.gray[600],
          focus: colors.gray[800],
          content: colors.gray[50],
        },
        info: {
          DEFAULT: colors.lightBlue[500],
        },
        success: {
          DEFAULT: colors.lime[500],
        },
        warning: {
          DEFAULT: colors.yellow[400],
        },
        error: {
          DEFAULT: colors.red[600],
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            p: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'Biryani', 'Maven Pro'],
      poppins: ['Poppins'],
      rubik: ['Rubik'],
    },
  },
  plugins: [typography, forms],
}
