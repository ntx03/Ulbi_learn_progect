import type {Meta, StoryObj} from "@storybook/react";
import Skeleton from "./Skeleton";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
    title: "shared/Skeleton",
    component: Skeleton,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        // @ts-ignore
        width: "100%",
        height: 200
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Circle: Story = {
    args: {
        // @ts-ignore
        border: "50%",
        width: 100,
        height: 100

    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export const NormalDark: Story = {
    args: {
        // @ts-ignore
        width: "100%",
        height: 200
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const CircleDark: Story = {
    args: {
        // @ts-ignore
        border: "50%",
        width: 100,
        height: 100

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
export const NormalBLUE: Story = {
    args: {
        // @ts-ignore
        width: "100%",
        height: 200
    },
    decorators: [ThemeDecorator(Theme.LIGHT_BLUE)],
};
export const CircleBLUE: Story = {
    args: {
        // @ts-ignore
        border: "50%",
        width: 100,
        height: 100

    },
    decorators: [ThemeDecorator(Theme.LIGHT_BLUE)]
};