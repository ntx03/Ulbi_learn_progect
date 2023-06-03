import { type StoryFn } from "@storybook/react";
import { type Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (WrapperComponent: StoryFn) =>
    (
        <div className={`app ${theme}`}>
            <WrapperComponent />
        </div>
    );
