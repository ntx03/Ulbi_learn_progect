import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "@/shared/config/storybookDecorators/themeDecorator";
import {MainPage} from "./MainPage";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";
import {Theme} from "@/shared/const/theme";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "pages/MainPage",
    component: MainPage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    decorators: [
        ReduxDecorator({
            counter: {
                value: 0,
            },
        }),
    ],
    args: {},
};
export const ThemeDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        ReduxDecorator({
            counter: {
                value: 0,
            },
        }),
    ],
    args: {},
};
