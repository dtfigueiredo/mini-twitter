const brandColors = {
  tweetBlue: '#1D9BF0',
  platinum: '#E7E9EA',
  silver: '#71767B',
  onix: '#333639',
  richBlack: '#15202B',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,

        avatarBlue: '#0082dd',
        avatarRed: '#dd0000',
        avatarYellow: '#dda600',
        avatarGreen: '#00dd00',
        avatarTurquoise: '#00dddd',
        avatarPurple: '#b800dd',
        avatarOrange: '#dd6e00',
      },
    },
  },
  plugins: [],
};
