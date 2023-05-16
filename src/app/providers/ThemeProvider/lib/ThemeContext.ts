import { createContext } from 'react';

export enum Theme {
  LIGTH = 'ligth',
  DARK = 'dark',
}
export interface ThemeContentProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContentProps>({
  theme: Theme.DARK,
  setTheme: () => Theme.DARK,
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
