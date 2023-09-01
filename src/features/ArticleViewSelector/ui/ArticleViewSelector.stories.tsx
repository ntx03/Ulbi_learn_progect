import type { Meta, StoryObj } from '@storybook/react';
import ArticleViewSelector, { type ArticleViewSelectorProps } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleViewSelectorProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};
