import type {Meta, StoryObj} from "@storybook/react";
import ArticlePage  from "./ArticlePage";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";

const meta: Meta<typeof ArticlePage> = {
    title: "pages/ArticlePage",
    component: ArticlePage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};