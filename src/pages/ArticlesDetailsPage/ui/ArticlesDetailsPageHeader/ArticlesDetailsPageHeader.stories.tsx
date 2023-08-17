import type {Meta, StoryObj} from "@storybook/react";
import ArticlesDetailsPageHeader, {type ArticlesDetailsPageHeaderProps} from "./ArticlesDetailsPageHeader";
import {ReduxDecorator} from "shared/config/storybookDecorators/reduxDecorator";

const meta: Meta<typeof ArticlesDetailsPageHeader> = {
    title: "pages/ArticlesDetailsPageHeader",
    component: ArticlesDetailsPageHeader,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticlesDetailsPageHeaderProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};