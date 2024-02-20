import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import { theme } from './theme.js'

const bigStone = {
  '50': '#f5f7fa',
  '100': '#ebeef3',
  '200': '#d2dae5',
  '300': '#abbcce',
  '400': '#7e98b2',
  '500': '#5d7b9a',
  '600': '#496280',
  '700': '#3c5068',
  '800': '#354557',
  '900': '#303c4a',
  '950': '#27303d',
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      boxShadow: {
        'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
        'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
        'material-3':
          '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        'material-4':
          '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
        'material-5':
          '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
      },
      colors: {
        background: {
          light: bigStone[100],
          dark: colors.gray[700],
        },
        surface: {
          primary: {
            bg: bigStone[100],
            'bg-hover': bigStone[100], //White
            fg: bigStone[100],
            'fg-hover': bigStone[100],
          },
          secondary: {
            bg: bigStone[100],
            'bg-hover': bigStone[300],
            fg: bigStone[950],
          },
          tertiary: {
            bg: '#70797C',
            'bg-hover': '#899295',
            fg: '#F8F9FB',
          },
        },
        primary: {
          bg: bigStone[950],
          'bg-hover': bigStone[800], //White
          fg: bigStone[100],
          'fg-hover': bigStone[100],
        },
        'primary-c': {
          bg: bigStone[300],
          'bg-hover': bigStone[200],
          fg: bigStone[100],
        },
        secondary: {
          bg: '#4b6269',
          'bg-hover': '#647B82',
          fg: '#ffffff',
        },
        'secondary-c': {
          bg: '#cee7ef',
          'bg-hover': '#DCF5FD',
          fg: '#061f25',
        },
        success: {
          bg: '#35CE8D', // todo #35CE8D
          'bg-hover': '#35CE8D',
          fg: '#ffffff',
        },
        warning: {
          bg: '##FFD700',
          'bg-hover': '#FFEC8B',
          fg: '#ffffff',
        },
        error: {
          bg: colors.red[500],
          'bg-hover': colors.red[300],
          fg: colors.red[100],
        },
        border: {
          primary: bigStone[950],
          'primary-hover': '#757779',
          secondary: '#8E9192',
          'secondary-hover': '#A9ABAD',
          tertiary: '#C5C7C8',
          'tertiary-hover': '#E1E3E4',
          disabled: '#00000014',
          focus: '#141414',
        },
        'big-stone': {
          '50': '#f5f7fa',
          '100': '#ebeef3',
          '200': '#d2dae5',
          '300': '#abbcce',
          '400': '#7e98b2',
          '500': '#5d7b9a',
          '600': '#496280',
          '700': '#3c5068',
          '800': '#354557',
          '900': '#303c4a',
          '950': '#27303d',
        },
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
export default config
