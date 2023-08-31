import type {Meta, StoryObj} from "@storybook/react";
import AppImage, {type AppImageProps} from "./AppImage";

const meta: Meta<typeof AppImage> = {
    title: "shared/AppImage",
    component: AppImage,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<AppImageProps>;

export const Normal: Story = {
    args: {},
    decorators: [],
};