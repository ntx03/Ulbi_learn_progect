import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "widgets/Sidebar",

  component: Sidebar,
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const themeLight: Story = {
  args: {},
};
export const themeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
