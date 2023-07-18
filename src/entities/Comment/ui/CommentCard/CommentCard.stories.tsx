import type {Meta, StoryObj} from "@storybook/react";
import CommentCard, {type CommentCardProps} from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
    title: "entities/CommentCard",
    component: CommentCard,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CommentCardProps>;

export const Normal: Story = {
    args: {
        comment: {
            "user":  {
                "id": "1",
                "username": "admin",
                "avatar": "https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album"
            },
            "text": "ОГО КАКАЯ КРУТАЯ СТАТЬЯ",
            "id": "3bHEgt3"
        },

    },
    decorators: [],
};