import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';
import { AboutPage } from './AboutPage';
import { ReduxDecorator } from '@/shared/config/storybookDecorators/reduxDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};
export const ThemeDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), ReduxDecorator({})],
    args: {},
};
