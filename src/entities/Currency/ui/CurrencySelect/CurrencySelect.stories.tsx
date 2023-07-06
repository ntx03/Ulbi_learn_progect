import {Theme} from "app/providers/ThemeProvider";

import CurrencySelect from "./CurrencySelect";
import {type Meta, type StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    args: {},
};
export const ThemeDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
