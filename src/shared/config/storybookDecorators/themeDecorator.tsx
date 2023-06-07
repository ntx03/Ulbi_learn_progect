import { type StoryFn } from "@storybook/react";
import { type Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (WrapperComponent: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <WrapperComponent />
            </div>
        </ThemeProvider>
    );
