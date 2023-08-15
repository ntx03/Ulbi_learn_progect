import type {Meta, StoryObj} from "@storybook/react";
import ArticleDetailsComments, {type ArticleDetailsCommentsProps} from "./ArticleDetailsComments";

const meta: Meta<typeof ArticleDetailsComments> = {
    title: "shared/ArticleDetailsComments",
    component: ArticleDetailsComments,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleDetailsCommentsProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};