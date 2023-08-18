import type {Meta, StoryObj} from "@storybook/react";
import Popover, {type PopoverProps} from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "shared/Popover",
    component: Popover,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<PopoverProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};