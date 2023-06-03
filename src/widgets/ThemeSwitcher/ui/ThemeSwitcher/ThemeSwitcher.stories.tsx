import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const themeLight: Story = {
    args: {},
};
export const themeDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
