import type {Meta, StoryObj} from "@storybook/react";
import ArticlesDetailsPageHeader, {type ArticlesDetailsPageHeaderProps} from "./ArticlesDetailsPageHeader";

const meta: Meta<typeof ArticlesDetailsPageHeader> = {
    title: "shared/ArticlesDetailsPageHeader",
    component: ArticlesDetailsPageHeader,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticlesDetailsPageHeaderProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};