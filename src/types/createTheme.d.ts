import * as createTheme from '@mui/material/styles/createTheme';

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
