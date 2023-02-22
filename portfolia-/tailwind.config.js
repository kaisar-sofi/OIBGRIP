/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        scale: 'scale 5s linear infinite',
      },
      keyframes: {
        scale: {
          '0%': {
            transform: 'scale(1)',
        filter: 'grayscale(1)',
          },
          '50%':{
            transform: 'scale(1.1)',
            filter:'grayscale(0)',
        
          },
          '100%':{
            transform: 'scale(1)',
            filter: 'grayscale(1)',
          },
        },
      },
      boxShadow: {
        Xsm: '0.2rem 0.2rem 0.6rem black',
      },        
    },
  },
  plugins: [],
}
