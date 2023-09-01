import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContentProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContentProps>({
    theme: Theme.DARK,
    setTheme: () => Theme.DARK,
});
