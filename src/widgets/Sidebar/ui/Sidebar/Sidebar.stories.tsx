import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';
import { Sidebar } from './Sidebar';
import { ReduxDecorator } from '@/shared/config/storybookDecorators/reduxDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'widgets/Sidebar',

    component: Sidebar,
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

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
