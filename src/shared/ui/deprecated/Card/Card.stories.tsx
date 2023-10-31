import type { Meta, StoryObj } from '@storybook/react';
import Card, { type CardProps } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CardProps>;

export const Normal: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <Text title={'Hello!!!'} text={'World!!!'} />,
    },
    decorators: [],
};
