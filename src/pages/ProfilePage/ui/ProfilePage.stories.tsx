import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";

import {ProfilePage} from "../index";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency"; // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeLight: Story = {
    args: {},
    decorators: [
        ReduxDecorator({
            profile: {
                form: {
                    username: "ntx033",
                    first: "Andrey",
                    lastname: "Kachur",
                    age: 36,
                    country: Country.Russia,
                    city: "Thumen",
                    currency: Currency.RUB,
                    avatar:
            "https://avatars.mds.yandex.net/i?id=b54721c405ec096ac675c679543227959a1eb426-9181172-images-thumbs&n=13",
                },
                isLoading: false,
                readonly: true,
            },
        }),
    ],
};

export const ThemeDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        ReduxDecorator({
            profile: {
                form: {
                    username: "ntx033",
                    first: "Andrey",
                    lastname: "Kachur",
                    age: 36,
                    country: Country.Russia,
                    city: "Thumen",
                    currency: Currency.RUB,
                    avatar:
            "https://avatars.mds.yandex.net/i?id=b54721c405ec096ac675c679543227959a1eb426-9181172-images-thumbs&n=13",
                },
                isLoading: false,
                readonly: false,
            },
        }),
    ],
    args: {},
};
