import * as createTheme from '@mui/material/styles/createTheme';
import * as createTypography from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    custom: {
      sidebar: string;
      pxToRem: (...args: number[]) => string;
    };
  }
  interface ThemeOptions {
    custom?: {
      sidebar?: string;
      pxToRem?: (...args: number[]) => string;
    };
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    fontFamilyBold: React.CSSProperties['fontFamily'];
  }

  // allow configuration using `createTheme`
  interface TypographyOptions {
    fontFamilyBold?: React.CSSProperties['fontFamily'];
  }
}
