import type {Meta, StoryObj} from "@storybook/react";

import {Button, ThemeButton} from "./Button";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
    title: "shared/Button",
    component: Button,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const main: Story = {
    args: {
    // @ts-ignore
        children: "test button",
    },
    decorators: [],
};
export const outline: Story = {
    args: {
    // @ts-ignore
        children: "test",
        theme: ThemeButton.OUTLINE,
    },
};
export const outlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    // @ts-ignore
        children: "test",
        theme: ThemeButton.OUTLINE,
    },
};
export const clear: Story = {
    args: {
    // @ts-ignore
        children: "test",
        theme: ThemeButton.CLEAR,
    },
};
export const clearDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    // @ts-ignore
        children: "test",
        theme: ThemeButton.CLEAR,
    },
};
