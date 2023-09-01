import type { Meta, StoryObj } from '@storybook/react';
import AdminPanelPage, { type AdminPanelPageProps } from './AdminPanelPage';
import { ReduxDecorator } from '@/shared/config/storybookDecorators/reduxDecorator';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<AdminPanelPageProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};
