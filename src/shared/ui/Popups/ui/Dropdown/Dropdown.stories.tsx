import type {Meta, StoryObj} from "@storybook/react";
import Dropdown, {type DropdownProps} from "./Dropdown";
import {Button, ButtonTheme} from '../../../Button/Button';


const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown",
    component: Dropdown,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Normal: Story = {
    args: {
        trigger: <Button theme={ButtonTheme.OUTLINE_INVERT}>1</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            },
        ]
    },
    decorators: [],
};