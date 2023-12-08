import { type StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type Theme } from '@/shared/const/theme';

/**
 * Декоратор темы сторибука
 * @param theme - тема сайта
 */
export const ThemeDecorator = (theme: Theme) => (WrapperComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <WrapperComponent />
        </div>
    </ThemeProvider>
);
