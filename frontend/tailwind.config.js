module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        header: ['Montserrat', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A1D37',
          50: '#4988DE',
          100: '#337ADA',
          200: '#2261B8',
          300: '#1A4B8D',
          400: '#123462',
          500: '#0A1D37',
          600: '#02060C',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        'light-gray': '#E5E5E5',
        'dark-gray': '#515B69',
        white: {
          DEFAULT: '#FFF7EF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFF7EF',
          600: '#FFDEBC',
          700: '#FFC489',
          800: '#FFAB56',
          900: '#FF9123',
        },
        blue: {
          DEFAULT: '#70A4CD',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E1ECF5',
          300: '#BCD4E7',
          400: '#96BCDA',
          500: '#70A4CD',
          600: '#4A8CC0',
          700: '#38729F',
          800: '#2A577A',
          900: '#1D3C54',
        },
        red: {
          DEFAULT: '#E65F5C',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FAE1E1',
          300: '#F4B6B4',
          400: '#ED8A88',
          500: '#E65F5C',
          600: '#DF3430',
          700: '#BF211D',
          800: '#931916',
          900: '#661210',
        },
        yellow: {
          DEFAULT: '#FFC770',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFEFD6',
          400: '#FFDBA3',
          500: '#FFC770',
          600: '#FFB33D',
          700: '#FF9F0A',
          800: '#D68200',
          900: '#A36300',
        },
        green: {
          DEFAULT: '#61988E',
          50: '#ECF3F1',
          100: '#DCE9E7',
          200: '#BDD5D1',
          300: '#9EC1BB',
          400: '#7FADA5',
          500: '#61988E',
          600: '#4D7971',
          700: '#395A54',
          800: '#253B37',
          900: '#121B1A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
