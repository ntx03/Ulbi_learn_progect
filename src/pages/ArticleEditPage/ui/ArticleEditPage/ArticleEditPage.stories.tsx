import type {Meta, StoryObj} from "@storybook/react";
import ArticleEditPage, {type ArticleEditPageProps} from "./ArticleEditPage";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";

const meta: Meta<typeof ArticleEditPage> = {
    title: "pages/ArticleEditPage",
    component: ArticleEditPage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticleEditPageProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};