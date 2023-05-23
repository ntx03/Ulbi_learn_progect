import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => StoryFn) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
