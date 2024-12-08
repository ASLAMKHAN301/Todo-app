/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': {
          DEFAULT: 'hsl(235, 19%, 35%)',
          hover: 'hsl(237, 14%, 26%)',
        },
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-alt': 'hsl(234, 39%, 85%)',
        'dark-grayish-blue-alt': 'hsl(234, 11%, 52%)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
    //   backgroundImage: {
    //     'custom-gradient': 'linear-gradient(135deg, #57ddff 0%, #c058f3 100%)',
    // },
    },
  },
  plugins: [],
}

