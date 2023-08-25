import type {Meta, StoryObj} from "@storybook/react";

import {Button, type ButtonProps, ButtonSize, ButtonTheme} from "./Button";
import {ThemeDecorator} from "@/shared/config/storybookDecorators/themeDecorator";
import {Theme} from "@/shared/const/theme";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
    args: {
        children: "test button",
    },
    decorators: [],
};
export const MainSizeM: Story = {
    args: {
        children: "test button",
        size: ButtonSize.M,
    },
    decorators: [],
};
export const MainSizeL: Story = {
    args: {
        children: "test button",
        size: ButtonSize.L,
    },
    decorators: [],
};
export const MainSizeXL: Story = {
    args: {
        children: "test button",
        size: ButtonSize.XL,
    },
    decorators: [],
};
export const MainDark: Story = {
    args: {
        children: "test button",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Outline: Story = {
    args: {
        children: "test",
        theme: ButtonTheme.OUTLINE,
    },
};
export const OutlineSizeM: Story = {
    args: {
        children: "test",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: "test",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: "test",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: "test",
        theme: ButtonTheme.OUTLINE,
    },
};
export const Clear: Story = {
    args: {
        children: "test",
        theme: ButtonTheme.CLEAR,
    },
};
export const ClearDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: "test",
        theme: ButtonTheme.CLEAR,
    },
};
export const Background: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
    },
};
export const BackgroundSizeMSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.M,
    },
};
export const BackgroundSizeLSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L,
    },
};
export const BackgroundSizeXLSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};
export const BackgroundDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND,
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const BackgroundInvertedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const BackgroundInvertedSizeMSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const BackgroundInvertedSizeLSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const BackgroundInvertedSizeXLSquare: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
export const BackgroundInvertedSizeXLSquareDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: "Отправить",
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
