import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';
import { Theme } from '@/shared/const/theme';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        // @ts-ignore
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryLight: Story = {
    args: {
        // @ts-ignore
        children: 'test link',
        theme: AppLinkTheme.PRIMERY,
    },
};

export const SecondaryLight: Story = {
    args: {
        // @ts-ignore
        children: 'test link',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const ThemeDarkPrimary: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        // @ts-ignore
        children: 'test link',
        theme: AppLinkTheme.PRIMERY,
    },
};
