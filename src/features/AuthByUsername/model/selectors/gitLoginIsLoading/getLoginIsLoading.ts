import { type StateSchema } from "@/app/providers/StoreProvider";
import { type DeepPartial } from "@reduxjs/toolkit";

export const getLoginIsLoading = (state: DeepPartial<StateSchema>) =>
    state?.loginForm?.isLoading || false;
