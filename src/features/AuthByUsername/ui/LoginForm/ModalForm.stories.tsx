import type {Meta, StoryObj} from "@storybook/react";
import LoginForm from "./LoginForm";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";
import {ThemeDecorator} from "@/shared/config/storybookDecorators/themeDecorator";
import {Theme} from "@/shared/const/theme"; // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "shared/ModalForm",
    component: LoginForm,
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    decorators: [
        ReduxDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: true,
            },
        }),
    ],
    args: {
    // @ts-ignore
        className: Theme.DARK,
    },
};
export const ModalDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        ReduxDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: true,
            },
        }),
    ],
    args: {
    // @ts-ignore
        className: Theme.LIGHT,
    },
};
