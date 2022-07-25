export interface Theme {
  fontFamiy: {
    regular: string;
    code: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  colors: {
    text: string;
    primary: string;
  };
}

const black500 = '#343d46';
const white500 = '#f6f8fa';

const defaultTheme = {
  fontFamiy: {
    regular: 'Source Sans Pro, sans-serif',
    code: 'Roboto mono, monospace',
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
};

const lightTheme = {
  ...defaultTheme,
  colors: {
    text: black500,
    primary: white500,
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    text: white500,
    primary: black500,
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
