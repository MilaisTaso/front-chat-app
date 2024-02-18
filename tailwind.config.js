/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        body: 'var(--body)',
        display: 'var(--display)',
        heading1: 'var(--heading1)',
        heading2: 'var(--heading2)',
        heading3: 'var(--heading3)',
        smallHeading1: 'var(--small-heading1)',
        smallHeading2: 'var(--small-heading2)',
      },
      keyframes: {
        dotAnimation: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."' },
          '60%': { content: '"..."' },
          '80%, 100%': { content: '""' },
        },
      },
      animation: {
        dotAnimation: 'dotAnimation 1.5s infinite',
      },
    },
  },
};
