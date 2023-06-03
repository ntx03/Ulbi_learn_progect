import type {Meta, StoryObj} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybookDecorators/themeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {PageLoader} from "widgets/PageLoader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "widgets/pageLoader",
  component: PageLoader,
  argTypes: {},
} satisfies Meta<typeof PageLoader>;

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
