import type {Meta, StoryObj} from "@storybook/react";
import Tabs, {TabItem, type TabsProps} from "./Tabs";
import {useMemo} from "react";

import {ArticleType} from "entities/Article/model/consts/consts";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs",
    component: Tabs,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<TabsProps>;

const typeTabs = [
    {
        value: ArticleType.ALL,
        content: 'Все статьи'
    },
    {
        value: ArticleType.IT,
        content: 'Айти'
    },
    {
        value: ArticleType.SCIENCE,
        content: 'Наука'
    },
    {
        value: ArticleType.ECONOMY,
        content: 'Экономика'
    },

]
export const Normal: Story = {
    args: {
        tabs: typeTabs
    },
    decorators: [],
};