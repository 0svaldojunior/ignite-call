import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        'home-container': 'calc(100vw - (100vw - 1160px)/ 2)',
      },

      gridTemplateColumns: {
        'claim-form': '1fr auto',
      },

      calendar: {
        invert:
          'input::-webkit-calendar-picker-indicator: { filter: invert(100%) brightness(30%) }',
      },

      colors: {
        ignite: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          900: '#121214',
        },

        gray: {
          100: '#E1E1E6',
          200: '#A9A9B2',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        error: {
          500: '#F75A68',
        },
      },
    },
  },
  plugins: [],
}
export default config
