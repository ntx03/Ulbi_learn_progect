import { type StoryFn } from "@storybook/react";
import React from "react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

export const ReduxDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => {
      return (
          <StoreProvider initialState={state}>
              <StoryComponent />
          </StoreProvider>
      );
  };
