import ProfileCard from './ProfileCard';
import { type Meta, type StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency'; // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    args: {
        data: {
            username: 'ntx033',
            first: 'Andrey',
            lastname: 'Kachur',
            age: 36,
            country: Country.Russia,
            city: 'Thumen',
            currency: Currency.RUB,
            avatar: 'https://avatars.mds.yandex.net/i?id=b54721c405ec096ac675c679543227959a1eb426-9181172-images-thumbs&n=13',
        },
    },
    // decorators: [ReduxDecorator({})],
};
export const WithError: Story = {
    decorators: [],
    args: {
        error: true,
    },
};

export const Loading: Story = {
    decorators: [],
    args: {
        isLoading: true,
    },
};
