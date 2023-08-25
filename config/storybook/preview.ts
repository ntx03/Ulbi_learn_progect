import { StyleDecorator } from "../../src/shared/config/storybookDecorators/styleDecorators";
import { ThemeDecorator } from "../../src/shared/config/storybookDecorators/themeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybookDecorators/routerDecorator";
import {Theme} from "../../src/shared/const/theme";

const preview = {
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
