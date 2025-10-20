import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
