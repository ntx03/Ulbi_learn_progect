import type {Meta, StoryObj} from "@storybook/react";
import AddCommentForm, {type AddCommentFormProps} from "./AddCommentForm";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";

const meta: Meta<typeof AddCommentForm> = {
    title: "features/AddCommentForm",
    component: AddCommentForm,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<AddCommentFormProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};