import type {Meta, StoryObj} from "@storybook/react";
import ArticlesPageFilters, {type ArticlesPageFiltersProps} from "./ArticlesPageFilters";

const meta: Meta<typeof ArticlesPageFilters> = {
    title: "shared/ArticlesPageFilters",
    component: ArticlesPageFilters,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ArticlesPageFiltersProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};