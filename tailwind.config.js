/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  daisyui: {
    styled: true,
    base: true,
    themes: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#FF7262',
          secondary: '#0A141F',
          accent: '#0E6BA8',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#FF7262',
          secondary: '#6B2D5C',
          accent: '#0E6BA8',
          'base-100': '#121212',
        },
      },
    ],
  },
  theme: {
    extend: {
      smallScreen: '500px',
      mediumScreen: '736px',
      tablet: '1024px',
      largeScreen: '1125px',
    },
    colors: {
      primarytransparent: 'rgba(255, 134, 53, 0.2)',
    },
    keyframes: {
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'fade-in-down': 'fade-in-down 1s ease-out',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}