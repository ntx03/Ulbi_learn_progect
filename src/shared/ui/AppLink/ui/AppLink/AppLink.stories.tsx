import type {Meta, StoryObj} from "@storybook/react";

import {AppLink, AppLinkTheme} from "./AppLink";
import "app/styles/index.scss";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "shared/AppLink",
  component: AppLink,
  // tags: ["autodocs"],
  argTypes: {},
  // decorators: [
  //   (Story) => (
  //     <BrowserRouter>
  //       <Story />
  //     </BrowserRouter>
  //   ),
  // ],
  //decorators: [(Story) => RouterDecorator(Story)],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary: Story = {
  args: {
    children: "test link",
    theme: AppLinkTheme.PRIMERY,
    to: "/",
  },
};

export const secondary: Story = {
  args: {
    children: "test link",
    theme: AppLinkTheme.SECONDARY,
    to: "/",
  },
};
