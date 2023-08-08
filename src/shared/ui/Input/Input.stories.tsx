import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Input, InputTheme } from "./Input";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Input",
    component: Input,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    // @ts-ignore
        placeholder: "test link",
        theme: InputTheme.INVERT,
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    // @ts-ignore
        placeholder: "test link",
        theme: InputTheme.INVERT,
    },
};
