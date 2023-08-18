import type {Meta, StoryObj} from "@storybook/react";
import NotificationsList, {type NotificationsListProps} from "./NotificationsList";

const meta: Meta<typeof NotificationsList> = {
    title: "shared/NotificationsList",
    component: NotificationsList,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<NotificationsListProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};