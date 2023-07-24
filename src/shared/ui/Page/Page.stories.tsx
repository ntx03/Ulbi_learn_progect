import type {Meta, StoryObj} from "@storybook/react";
import Page, {type PageProps} from "./Page";

const meta: Meta<typeof Page> = {
    title: "shared/Page",
    component: Page,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<PageProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};