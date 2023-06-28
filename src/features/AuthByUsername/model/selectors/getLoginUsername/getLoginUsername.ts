import { type StateSchema } from "app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

export const getLoginUsername = (state: DeepPartial<StateSchema>) =>
    state?.loginForm?.username || "";
