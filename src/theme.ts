const htmlFontSize = 16;
const defaultFontFamily = 'Intro Book';
const secondaryFontFamily = 'Intro Bold';
const fontSize = 14;
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;
const coef = fontSize / 14;
// const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;
// breakpoints

const bkPoints = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0,
};

const pxToRem = (...args: number[]) => {
  return args.slice(0, 4).reduce((sum, size) => {
    const increment: string = `${(size / htmlFontSize) * coef}rem`;
    return sum ? `${sum} ${increment}` : increment;
  }, '');
};

const buildVariant = ({
  fontFamily = defaultFontFamily,
  fontWeight = fontWeightRegular,
  size = 16,
  lineHeight = '150%',
  letterSpacing = 'inheret',
}) => ({
  fontFamily,
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight,
  letterSpacing,
});

export const theme = {
  palette: {
    mode: 'light',
    common: {
      white: '#ffffff',
      black: '',
    },
    primary: {
      light: '#D5E3F0',
      main: '#3758CC',
      dark: '#414F80',
    },
    secondary: {
      light: '#414F80',
      main: '#414F80',
      dark: '#414F80',
    },
    text: {
      primary: '#3C3C3C',
      secondary: '#969696',
    },
    info: {
      light: '#EFCE8D',
      main: '#EBC052',
      dark: '#806228',
    },
    success: {
      light: '#5DCAA4',
      main: '#EBC052',
      dark: '#2F926F',
    },
    warning: {
      light: '#2F926F',
      main: '#EB8A52',
      dark: '#C26027',
    },
    error: {
      light: '#E49196',
      main: '#DF5555',
      dark: '#664043',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F7F7F7',
    },
  },
  typography: {
    fontFamily: defaultFontFamily,
    fontFamilyBold: secondaryFontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,

    // htmlFontSize,
    h1: buildVariant({
      fontWeight: fontWeightBold,
      size: 92,
      lineHeight: '100%',
      letterSpacing: '-0.01em',
    }),
    h2: buildVariant({
      fontWeight: fontWeightBold,
      size: 40,
      lineHeight: '100%',
    }),
    h3: buildVariant({
      fontWeight: fontWeightBold,
      size: 32,
      lineHeight: '125%',
      letterSpacing: '-0.01em',
    }),
    h4: buildVariant({
      fontWeight: fontWeightBold,
      size: 24,
      lineHeight: '125%',
    }),
    h5: buildVariant({
      fontWeight: fontWeightBold,
      size: 20,
      lineHeight: '125%',
    }),

    subtitle1: buildVariant({
      fontWeight: fontWeightBold,
      size: 16,
      lineHeight: '140%',
    }),
    subtitle2: buildVariant({
      fontWeight: fontWeightBold,
      size: 14,
      lineHeight: '140%',
    }),
    body1: buildVariant({}),
    body2: buildVariant({ size: 14 }),
    caption: buildVariant({ size: 12, lineHeight: '120%' }),
    //Todo: not sure how to add the other caption styles defined in the style guide
    //Will need to extend the MUI theme type to add more caption variants??
    // caption2: buildVariant({
    //   size: 12,
    //   lineHeight: "120%",
    // }),
    // caption3: buildVariant({ size: 10, lineHeight: "120%" }),
    button: buildVariant({
      size: 18,
      lineHeight: '120%',
    }),
    overline: {
      ...buildVariant({ letterSpacing: '0.2em', lineHeight: '140%' }),
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: bkPoints,
  },
};

export const customTheming = {
  custom: {
    sidebar: { close: pxToRem(72), open: pxToRem(240) },
    pxToRem: pxToRem,
  },
};
