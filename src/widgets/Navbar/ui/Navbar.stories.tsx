import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const theme_ligth: Story = {
  args: {},
};
export const theme_dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
