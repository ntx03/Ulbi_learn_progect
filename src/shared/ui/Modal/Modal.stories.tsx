import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import Modal from "shared/ui/Modal/Modal";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "shared/Modal",
    component: Modal,
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        children: "Мой текст!!!!!",
        isOpen: true,
    },
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: "Мой текст!!!!!",
        isOpen: true,
        onClose: false,
    },
};
