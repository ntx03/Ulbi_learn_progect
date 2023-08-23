import { type StateSchema } from "@/app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

export const getLoginPassword = (state: DeepPartial<StateSchema>) =>
    state?.loginForm?.password || "";
