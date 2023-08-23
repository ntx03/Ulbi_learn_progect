import type {Meta, StoryObj} from "@storybook/react";
import Page, {type PageProps} from "./Page";
import {ReduxDecorator} from "@/shared/config/storybookDecorators/reduxDecorator";

const meta: Meta<typeof Page> = {
    title: "widgets/Page",
    component: Page,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<PageProps>;

export const Normal: Story = {
    args: {},
    decorators: [ReduxDecorator({})],
};