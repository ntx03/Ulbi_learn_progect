import type {Meta, StoryObj} from "@storybook/react";
import AvatarDropdown, {type AvatarDropdownProps} from "./AvatarDropdown";

const meta: Meta<typeof AvatarDropdown> = {
    title: "features/AvatarDropdown",
    component: AvatarDropdown,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<AvatarDropdownProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};