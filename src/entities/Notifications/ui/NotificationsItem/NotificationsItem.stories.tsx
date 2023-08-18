import type {Meta, StoryObj} from "@storybook/react";
import NotificationsItem, {type NotificationsItemProps} from "./NotificationsItem";

const meta: Meta<typeof NotificationsItem> = {
    title: "shared/NotificationsItem",
    component: NotificationsItem,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<NotificationsItemProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};