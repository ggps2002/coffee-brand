/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '425px',
        md: '768px',
        lg: '976px',
        xlg: '1024px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

