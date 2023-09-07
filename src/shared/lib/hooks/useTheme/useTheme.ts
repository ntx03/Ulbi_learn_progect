import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction: (newTheme: Theme) => void) => void;
    theme: Theme | 'app_dark_theme';
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    // переключатель темы
    const toggleTheme = (saveAction: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.LIGHT_BLUE;
                break;
            case Theme.LIGHT_BLUE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        saveAction?.(newTheme);
    };

    return { theme, toggleTheme };
}
