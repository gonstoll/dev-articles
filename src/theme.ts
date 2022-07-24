export interface Theme {
  colors: {
    background: string;
    color: string;
  };
  fontFamiy: {
    regular: string;
    code: string;
  };
}

const black500 = '#1f1f1f';
const white500 = '#fdfdfd';

const defaultTheme = {
  fontFamiy: {
    regular: 'Open sans, sans-serif',
    code: 'Roboto mono, monospace',
  },
};

const lightTheme = {
  ...defaultTheme,
  colors: {
    background: white500,
    color: black500,
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    background: black500,
    color: white500,
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
