import type { Meta, StoryObj } from '@storybook/react';
import StarRating, { type StarRatingProps } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<StarRatingProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};
