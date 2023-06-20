import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import Modal from "shared/ui/Modal/Modal";
import LoginForm from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "shared/LoginForm",
    component: Modal,
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

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
        children: <LoginForm />,
        isOpen: true,
        lazy: true,
    },
};
export const ModalDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        ReduxDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: false,
            },
        }),
    ],
    args: {
        children: <LoginForm />,
        isOpen: true,
        lazy: true,
    },
};
