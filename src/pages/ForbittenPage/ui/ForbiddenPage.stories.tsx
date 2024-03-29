import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage, { type ForbiddenPageProps } from './ForbiddenPage';
import { ReduxDecorator } from '@/shared/config/storybookDecorators/reduxDecorator';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ForbiddenPageProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};
