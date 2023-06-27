import type {Meta, StoryObj} from "@storybook/react";
import LoginForm from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";

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
    args: {},
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
    args: {},
};
