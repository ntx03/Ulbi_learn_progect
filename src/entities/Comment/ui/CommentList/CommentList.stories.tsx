import type {Meta, StoryObj} from "@storybook/react";
import CommentList, {type CommentListProps} from "./CommentList";

const meta: Meta<typeof CommentList> = {
    title: "shared/CommentList",
    component: CommentList,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CommentListProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};