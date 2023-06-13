import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybookDecorators/styleDecorators";
import { ThemeDecorator } from "../../src/shared/config/storybookDecorators/themeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybookDecorators/routerDecorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
