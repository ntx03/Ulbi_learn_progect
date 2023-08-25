import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "@/shared/config/storybookDecorators/themeDecorator";
import PageError from "./PageError";
import {Theme} from "@/shared/const/theme";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "widgets/PageError",
    component: PageError,
    argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    args: {},
};
export const ThemeDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
