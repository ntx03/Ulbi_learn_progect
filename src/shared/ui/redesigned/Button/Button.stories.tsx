import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
    args: {
        children: 'test button',
    },
    decorators: [],
};
export const MainSizeM: Story = {
    args: {
        children: 'test button',
        size: 'm',
    },
    decorators: [],
};
export const MainSizeL: Story = {
    args: {
        children: 'test button',
        size: 'l',
    },
    decorators: [],
};
export const MainSizeXL: Story = {
    args: {
        children: 'test button',
        size: 'xl',
    },
    decorators: [],
};
export const MainDark: Story = {
    args: {
        children: 'test button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Outline: Story = {
    args: {
        children: 'test',
        variant: 'outline',
    },
};
export const OutlineSizeM: Story = {
    args: {
        children: 'test',
        variant: 'outline',
        size: 'm',
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: 'test',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'test',
        variant: 'outline',
        size: 'xl',
    },
};
export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'test',
        variant: 'outline',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Отправить',
        variant: 'outline',
        disabled: true,
    },
};
