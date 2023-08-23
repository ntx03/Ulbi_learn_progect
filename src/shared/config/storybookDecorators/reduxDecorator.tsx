import { type StoryFn } from "@storybook/react";
import React from "react";
import { type StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { type DeepPartial } from "@reduxjs/toolkit";
import {articleDetailsReducer} from "@/entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "@/features/addCommentForm/model/slice/addCommentFormSlice";

import {counterReducer} from "@/entities/Counter";
import {articleDetailsPageReducer} from "@/pages/ArticlesDetailsPage/model/slice";
import {profileReducer} from "@/features/editableProfileCard";

const defaultAsyncReducers: ReducerList = {
    counter: counterReducer,
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
export const ReduxDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
      (StoryComponent: StoryFn) => {

          return (
              <StoreProvider
                  initialState={state}
                  asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
              >
                  <StoryComponent />
              </StoreProvider>
          );
      };
