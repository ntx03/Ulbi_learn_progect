import type {Meta, StoryObj} from "@storybook/react";
import CommentList, {type CommentListProps} from "./CommentList";

const meta: Meta<typeof CommentList> = {
    title: "entities/CommentList",
    component: CommentList,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CommentListProps>;

export const Normal: Story = {
    args: {
        comments: [{
            "user":  {
                "id": "1",
                "username": "admin",
                "avatar": "https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album"
            },
            "text": "ОГО КАКАЯ КРУТАЯ СТАТЬЯ",
            "id": "3bHEgt3"
        },
        {
            "user":  {
                "id": "1",
                "username": "admin",
                "avatar": "https://sun9-61.userapi.com/impg/klVbMKagVgPPz4WPRo5RNynLXixClb5p8j6k2A/F-nW60SkPlE.jpg?size=659x791&quality=95&sign=ce83e4dafe7298d796a0d1bfdb76eaa3&type=album"
            },
            "text": "ОГО КАКАЯ КРУТАЯ СТАТЬЯ",
            "id": "3bHEgt3"
        },
        ]
    },
    decorators: [],
};
export const NoComment: Story = {
    args: {
        comments: []
    },
    decorators: [],
};

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true
    },
    decorators: [],
};