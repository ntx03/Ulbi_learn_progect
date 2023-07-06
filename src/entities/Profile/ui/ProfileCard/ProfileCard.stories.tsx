import {Theme} from "app/providers/ThemeProvider";

import ProfileCard from "./ProfileCard";
import {type Meta, type StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator"; // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfileCard>;

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
