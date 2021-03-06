module.exports = {
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      white: '#fff',
      blktrans: {
        10: '#0000001a',
        20: '#00000033',
        30: '#0000004d',
        40: '#00000066',
        50: '#00000080',
        60: '#00000099',
        70: '#000000b3',
        80: '#000000cc',
        90: '#000000e6',
      },
      whttrans: {
        10: '#ffffff1a',
        20: '#ffffff33',
        30: '#ffffff4d',
        40: '#ffffff66',
        50: '#ffffff80',
        60: '#ffffff99',
        70: '#ffffffb3',
        80: '#ffffffcc',
        85: '#ffffffd9',
        90: '#ffffffe6',
      },
      teal: {
        100: '#e6ffff',
        200: '#99dfe1',
        300: '#66cfd3',
        400: '#33bfc4',
        500: '#00afb5',
        600: '#039da3',
        700: '#028c91',
        800: '#027a7f',
        900: '#01696d',
      },
      lime: {
        100: '#f0f3de',
        200: '#e2e8bc',
        300: '#d3dd9c',
        400: '#c5d27a',
        500: '#b6c659',
        600: '#a4b250',
        700: '#929f47',
        800: '#7f8a3e',
        900: '#6d7736',
      },
      red: {
        100: '#f9d7d4',
        200: '#f2afa8',
        300: '#ed877d',
        400: '#e66053',
        500: '#e03726',
        600: '#c93122',
        700: '#b32c1e',
        800: '#9d261b',
        900: '#872117',
      },
      dkgray: {
        100: '#F2F2F2',
        200: '#D8D8D8',
        300: '#C5C5C5',
        400: '#B3B3B3',
        500: '#A0A0A0',
        600: '#8E8E8E',
        700: '#7B7B7B',
        800: '#696969',
        900: '#565656',
      },
    },
    extend: {
      animation: {
        multiplier: 'multiplier 2s ease-in-out infinite',
      },
      keyframes: {
        multiplier: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.90' },
        },
      },
      screens: {
        xxl: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      maxHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '750': '750px',
      },
      fontFamily: {
        'display': ['alternate-gothic-no-2-d', 'sans-serif'],
        'headline': ['Whitney SSm A', 'Whitney SSm B', 'sans-serif'],
        'body': ['Whitney SSm A', 'Whitney SSm B', 'sans-serif'],
      },
      fontSize: {
        'lg': '1.125rem', // 18px
        'xlm': '1.1875rem', // 19px
        'xl': '1.25rem', // 20px
        '2xlm': '1.375rem', // 22px
        '2xl': '1.5rem', // 24px  
        '3xlm': '1.875rem', // 30px
        '3xl': '2rem', // 32px
        '4xlm': '2.25rem', // 36px
        '4xl': '2.5rem', // 40px
        '5xlm': '2.625rem', // 42px
        '5xl': '3rem', // 48px
        // Transform Fonts
        '4xxl': '2.5rem',
        '5xxl': '3.75rem',
        '7xl': '5rem',
        '7xxl': '5.5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        'massive': '12.5rem',

      },
      lineHeight: {
        jampacked: '.75',
        jammed: '.875',
      },
      margin: {
        30: '1.875rem',
      },
      padding: {
        30: '1.875rem',
      },
      spacing: {
        '18': '4.5rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '9/16': '56.25%',
        '3/2': '150%',
        '5/3': '166.666667%',
        full: '100%',
        screen: '100vw',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
      height: {
        9: '2.25rem',
        14: '3.5rem',
        'fixed-video': 'calc(100vh - 5rem)',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      borderRadius: {
        'wc': '3px', 
      },
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      aspectRatio: ['responsive'],
      borderRadius: ['responsive', 'hover', 'focus'],
      rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'focus-within', 'group-hover'],
      borderRadius: ['responsive', 'hover', 'focus', 'active', 'focus-within', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('autoprefixer'),
  ],
};
