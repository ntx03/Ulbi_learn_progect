import type {Meta, StoryObj} from "@storybook/react";

import {AppLink, AppLinkTheme} from "./AppLink";
import "app/styles/index.scss";
import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary_ligth: Story = {
  args: {
    children: "test link",
    theme: AppLinkTheme.PRIMERY,
  },
};

export const secondary_ligth: Story = {
  args: {
    children: "test link",
    theme: AppLinkTheme.SECONDARY,
  },
};
export const theme_dark_primery: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "test link",
    theme: AppLinkTheme.PRIMERY,
  },
};
export const theme_dark_secondary: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "test link",
    theme: AppLinkTheme.SECONDARY,
  },
};
