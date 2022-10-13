/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '892px',
      'xl': '1024px',
      '2xl': '1200px',
      '3xl': '1440px',
      '4xl': '1532px',
    },
    extend: {
      colors: {
        'darkBlack': '#081219',
        'grassGreen' : {
          100: '#1CC98A',
          200: '#0F855B',
          300: '#2BDA80',
        },
      },
      backgroundImage: {
        'profile': "url('/src/assets/profile.png')"
      }
    },
  },
  plugins: [],
};
