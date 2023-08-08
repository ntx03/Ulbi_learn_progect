import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import Select, { type SelectProps } from "../Select/Select";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Select",
    component: Select,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
// @ts-ignore
type Story = StoryObj<typeof SelectProps>;

export const Light: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "123" },
            { value: "321", content: "321" },
        ],
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "123" },
            { value: "321", content: "321" },
        ],
    },
};
