import { type StoryFn } from "@storybook/react";
import React from "react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type DeepPartial, type ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
export const ReduxDecorator =
  (
      state: DeepPartial<StateSchema>,
      asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
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