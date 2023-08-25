import { type StoryFn } from "@storybook/react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import {type Theme} from "@/shared/const/theme";

export const ThemeDecorator = (theme: Theme) => (WrapperComponent: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <WrapperComponent />
            </div>
        </ThemeProvider>
    );
