import type { Meta, StoryObj } from "@storybook/react";
import {Text, TextSize, TextTheme} from "../Text/Text";
import { ThemeDecorator } from "@/shared/config/storybookDecorators/themeDecorator";

import {Theme} from "@/shared/const/theme";

const meta = {
    title: "shared/Text",
    component: Text,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const LightTheme: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
    },
};

export const LightThemeTextSizeS: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
        size: TextSize.S,
    },
};
export const LightThemeTextSizeM: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
        size: TextSize.M,
    },
};
export const LightThemeTextSizeL: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
        size: TextSize.L,
    },
};
export const LightThemeTextSizeXL: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
        size: TextSize.XL,
    },
};
export const ErrorTheme: Story = {
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.ERROR,
    },
};
export const LightThemeOnlyTitle: Story = {
    args: {
        title: "Error",
        theme: TextTheme.PRIMARY,
    },
};
export const LightThemeOnlyText: Story = {
    args: {
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
    },
};
export const DarkTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
        theme: TextTheme.PRIMARY,
    },
};
