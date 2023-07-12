import type {Meta, StoryObj} from "@storybook/react";
import CommentCard, {type CommentCardProps} from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
    title: "shared/CommentCard",
    component: CommentCard,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CommentCardProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};