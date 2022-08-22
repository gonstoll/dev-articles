import * as React from 'react';
import {Theme} from './entities';

interface Context {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<Context>({
  theme: 'light',
  updateTheme: () => undefined,
});

export function useThemeContext() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext should be used inside a context provider');
  }

  return context;
}

export function ThemeContextProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [theme, setTheme] = React.useState<Theme>('light');

  const updateTheme = React.useCallback((theme: Theme) => {
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
