import type {Meta, StoryObj} from "@storybook/react";
import ArticleInfiniteList, {type ArticleInfiniteListProps} from "./ArticleInfiniteList";

const meta: Meta<typeof ArticleInfiniteList> = {
    title: "shared/ArticleInfiniteList",
    component: ArticleInfiniteList,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleInfiniteListProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};