module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        gradientOne: 'hsl(192, 100%, 67%)',
        gradientTwo: 'hsl(280, 87%, 65%)',
        lightTheme: {
          veryLightGray: 'hsl(0, 0%, 98%)',
          blue: {
            veryLightGrayish: 'hsl(236, 33%, 92%)',
            lightGrayish: 'hsl(233, 11%, 84%)',
            darkGrayish: 'hsl(236, 9%, 61%)',
            veryDarkGrayish: 'hsl(235, 19%, 35%)',
          },
        },
        darkTheme: {
          veryDark: 'hsl(235, 21%, 11%)',
          veryDarkDesaturated: 'hsl(235, 24%, 19%)',
          lightGrayish: 'hsl(234, 39%, 85%)',
          hoverLightGrayish: 'hsl(236, 33%, 92%)',
          darkGrayish: 'hsl(234, 11%, 52%)',
          darkerGrayish: 'hsl(233, 14%, 35%)',
          veryDarkGrayish: 'hsl(237, 14%, 26%)',
        },
      },
      zIndex: {
        '-10': '-10',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        wider: '.05em',
        widest: '.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
