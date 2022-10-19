const theme = {
  // in px
  container: 1200,

  colors: {
    primary: '#000',
    bg: '#F0731C',
    secondary: '#ededf4',
    success: '#22b07d',
    error: '#f44336 ',
  },

  fonts: {
    // in px
    sizes: {
      title1: 48,
      title2: 36,
      subtitle: 20,
      text1: 16,
      text2: 14,
    },

    // in px
    lineHeights: {
      title1: 58,
      title2: 44,
      subtitle: 24,
      text1: 19,
      text2: 17,
    },

    weights: {
      w300: 300,
      w400: 400,
      w500: 500,
      w700: 700,
    },
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms150: 150,
    ms200: 200,
    ms300: 300,
  },
};

export default theme;
