import type {Meta, StoryObj} from "@storybook/react";
import ArticlesDetailsPage from "./ArticlesDetailsPage";

const meta: Meta<typeof ArticlesDetailsPage> = {
    title: "shared/ArticlesDetailsPage",
    component: ArticlesDetailsPage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesDetailsPage>;

export const Normal: Story = {
    args: {},
    decorators: [],
};