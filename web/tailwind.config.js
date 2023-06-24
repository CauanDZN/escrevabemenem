/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      maxWidth: {
        axl: '1120px',
      },

      screens: {
        axl: 'calc((2 * 3rem) + 1120px)',
      },

      colors: {
        'dark-green-50': '#F0FFF4',
        'dark-green-100': '#C6F6D5',
        'dark-green-200': '#9AE6B4',
        'dark-green-300': '#68D391',
        'dark-green-400': '#48BB78',
        'dark-green-500': '#38A169',
        'dark-green-600': '#2F855A',
        'dark-green-700': '#276749',
        'dark-green-800': '#22543D',
        'dark-green-900': '#1C4532',
      },

      fontSize: {
        'h1': '2.25rem'
      },
      
      keyframes: {
        'header-scroll': {
          '0%': {
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem'
          },
          '100%': {
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem'
          },
        }
      },
    },
  },
  plugins: [],
}
