import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import {Theme} from './entities';

interface Context {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<Context>({
  theme: 'light',
  updateTheme: () => undefined,
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext should be used inside a context provider');
  }

  return context;
}

export function ThemeContextProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light');

  const updateTheme = useCallback((theme: Theme) => {
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
