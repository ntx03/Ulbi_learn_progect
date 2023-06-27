import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "../Text/Text";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

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
    },
};
export const LightThemeOnlyText: Story = {
    args: {
        text: "Произошла ошибка. Попробуйте еще раз!",
    },
};
export const DarkTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: "Error",
        text: "Произошла ошибка. Попробуйте еще раз!",
    },
};