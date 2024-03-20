import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const fromVariable = (name: string) => `hsl(var(--${name}) / <alpha-value>)`

const rhino = {
  '50': '#f1f8fd',
  '100': '#e0eef9',
  '200': '#c8e2f5',
  '300': '#a3cfed',
  '400': '#77b5e3',
  '500': '#579ada',
  '600': '#4380cd',
  '700': '#396cbc',
  '800': '#345999',
  '900': '#263e64',
  '950': '#202f4b',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(180px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
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
        ...rhino,
        border: rhino[400],
        input: rhino[300],
        ring: rhino[200],
        background: rhino[100],
        foreground: rhino[950],
        primary: {
          DEFAULT: rhino[800],
          foreground: colors.white,
          hover: rhino[700],
        },
        secondary: {
          DEFAULT: rhino[300],
          foreground: rhino[950],
          hover: rhino[300],
        },
        destructive: {
          DEFAULT: fromVariable('destructive'),
          foreground: fromVariable('destructive-foreground'),
        },
        accent: {
          DEFAULT: fromVariable('accent'),
          foreground: fromVariable('accent-foreground'),
        },
        popover: {
          DEFAULT: fromVariable('popover'),
          foreground: fromVariable('popover-foreground'),
        },
        card: {
          DEFAULT: rhino[100],
          foreground: rhino[950],
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
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
