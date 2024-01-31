/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        body: "var(--body)",
        display: "var(--display)",
        heading1: "var(--heading1)",
        heading2: "var(--heading2)",
        heading3: "var(--heading3)",
        smallHeading1: "var(--small-heading1)",
        smallHeading2: "var(--small-heading2)",
      },
    },
  },
  plugins: [],
};
