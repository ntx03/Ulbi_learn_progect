import { createSlice } from "@reduxjs/toolkit";
import { type UserSchema } from "../types/user";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    // increment: (state) => {
    //     state.value += 1;
    // },
    // decrement: (state) => {
    //     state.value -= 1;
    // },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
