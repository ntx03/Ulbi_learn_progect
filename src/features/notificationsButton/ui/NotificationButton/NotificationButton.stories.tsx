import type { Meta, StoryObj } from '@storybook/react';
import NotificationButton, { type NotificationButtonProps } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<NotificationButtonProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};
