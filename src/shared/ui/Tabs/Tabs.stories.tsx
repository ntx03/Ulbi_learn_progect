import type {Meta, StoryObj} from "@storybook/react";
import Tabs, {type TabsProps} from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs",
    component: Tabs,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<TabsProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};