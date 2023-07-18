import { type StoryFn } from "@storybook/react";
import React from "react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

import { profileReducer } from "entities/Profile";
import { type ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { type DeepPartial } from "@reduxjs/toolkit";
import {articleDetailsReducer} from "entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {articleDetailsCommentsReducer} from "pages/ArticlesDetailsPage/model/slice/ArticleDetailsCommentsSlice";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
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
