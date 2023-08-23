import "@/app/styles/index.scss";
import { type StoryFn } from "@storybook/react";

export const StyleDecorator = (story: () => StoryFn) => story();
