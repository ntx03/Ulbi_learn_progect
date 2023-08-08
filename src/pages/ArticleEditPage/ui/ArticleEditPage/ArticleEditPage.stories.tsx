import type {Meta, StoryObj} from "@storybook/react";
import ArticleEditPage, {type ArticleEditPageProps} from "./ArticleEditPage";

const meta: Meta<typeof ArticleEditPage> = {
    title: "shared/ArticleEditPage",
    component: ArticleEditPage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleEditPageProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};