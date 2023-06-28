import { type StateSchema } from "app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

export const getLoginError = (state: DeepPartial<StateSchema>) =>
    state?.loginForm?.error || false;
