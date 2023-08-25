import { StyleDecorator } from "../../src/shared/config/storybookDecorators/styleDecorators";
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
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
                { name: 'dark', class: ['app', Theme.DARK], color: '#002a5b' },
                { name: 'blue', class: ['app', Theme.LIGHT_BLUE], color: '#299b91' }
            ],
        },

    },
    decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
