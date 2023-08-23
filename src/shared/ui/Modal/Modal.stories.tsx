import type {Meta, StoryObj} from "@storybook/react";
import Modal from "./Modal";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "shared/ModalWithLoginForm",
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
    //   children: <LoginForm onSuccess={() => false} />,
        isOpen: true,
        lazy: true,
    },
};
export const ModalDark: Story = {
    decorators: [
    // ThemeDecorator(Theme.DARK),
        ReduxDecorator({
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: true,
            },
        }),
    ],
    args: {
    //  children: <LoginForm onSuccess={() => false} />,
        isOpen: true,
        lazy: true,
    },
};
