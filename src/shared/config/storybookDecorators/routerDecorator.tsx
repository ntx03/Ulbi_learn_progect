import { type StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "@/shared/ui/Loader/Loader";

export const RouterDecorator = (StoryComponent: StoryFn) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}><StoryComponent/></Suspense>
        </BrowserRouter>
    );
};
