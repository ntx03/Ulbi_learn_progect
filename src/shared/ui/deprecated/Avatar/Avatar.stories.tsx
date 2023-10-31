import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Avatar from './Avatar';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/themeDecorator';

import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
    args: {
        size: 150,
        src: 'https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album',
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        size: 150,
        src: 'https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album',
    },
};
