import type {Meta, StoryObj} from "@storybook/react";
import AddCommentForm, {type AddCommentFormProps} from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
    title: "shared/AddCommentForm",
    component: AddCommentForm,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<AddCommentFormProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};