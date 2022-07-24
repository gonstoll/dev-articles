import {useLayoutEffect, lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themes} from './theme';
import {useThemeContext} from './themeContext';

const Tags = lazy(() => import('./pages/Tags'));
const Articles = lazy(() => import('./pages/Articles'));

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({theme}) => theme.colors.background};
    height: 100%;
    margin: 0;
  }
`;

export default function App() {
  const {theme, updateTheme} = useThemeContext();

  useLayoutEffect(() => {
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

  console.log('Rendering App');

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tags />} />
          <Route path="/:tagName" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
