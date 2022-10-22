const theme = {
  // in px
  container: 1200,
  containerXL: 1380,

  colors: {
    primary: '#000',
    bg: '#F0731C',
    secondary: '#ededf4',
    success: '#22b07d',
    error: '#f44336 ',
  },

  fonts: {
    // in rem
    sizes: {
      title1: 4.8,
      title2: 2.8,
      subtitle: 1.8,
      text1: 1.6,
      text2: 1.4,
    },

    // in px
    lineHeights: {
      title1: 5.8,
      title2: 3.6,
      subtitle: 2.2,
      text1: 1.9,
      text2: 1.7,
    },

    weights: {
      w300: 300,
      w400: 400,
      w500: 500,
      w700: 700,
    },
  },

  media: {
    laptopL: '(max-width: 2560px)',
    laptop: '(max-width: 1440px)',
    midLapTab: '(max-width: 1220px)',
    tablet: '(max-width: 1024px)',
    mobileL: '(max-width: 768px)',
    mobileM: '(max-width: 425px)',
    mobileS: '(max-width: 375px)',
  },

  // in ms
  durations: {
    ms150: 150,
    ms200: 200,
    ms300: 300,
  },
};

export default theme;
