import type {Meta, StoryObj} from "@storybook/react";
import ArticleRating, {type ArticleRatingProps} from "./ArticleRating";

const meta: Meta<typeof ArticleRating> = {
    title: "shared/ArticleRating",
    component: ArticleRating,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleRatingProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};