import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContentProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

/**
 * передаем тему через контекст
 */
export const ThemeContext = createContext<ThemeContentProps>({
    theme: Theme.DARK,
    setTheme: () => Theme.DARK,
});
