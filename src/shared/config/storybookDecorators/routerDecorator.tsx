import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loader from "shared/ui/Loader/Loader";

export const RouterDecorator = (story: () => StoryFn) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{story()}</Suspense>
    </BrowserRouter>
  );
};
