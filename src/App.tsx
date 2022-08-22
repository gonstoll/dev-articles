import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themes} from './theme';
import {useThemeContext} from './themeContext';

const Tags = React.lazy(() => import('./pages/Tags'));
const Articles = React.lazy(() => import('./pages/Articles'));

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    background-color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fontFamiy.regular};
    color: ${({theme}) => theme.colors.text};
    height: 100%;
    margin: 0;
  }
`;

export default function App() {
  const {theme, updateTheme} = useThemeContext();

  React.useLayoutEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const theme = e.matches ? 'dark' : 'light';
      updateTheme(theme);
    };

    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');

    isDarkTheme.addEventListener('change', handleThemeChange);

    if (isDarkTheme.matches) {
      updateTheme('dark');
    } else {
      updateTheme('light');
    }

    return () => {
      isDarkTheme.removeEventListener('change', handleThemeChange);
    };
  }, [updateTheme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <Tags />
              </React.Suspense>
            }
          />
          <Route
            path="/:tagName"
            element={
              <React.Suspense fallback="Loading...">
                <Articles />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
