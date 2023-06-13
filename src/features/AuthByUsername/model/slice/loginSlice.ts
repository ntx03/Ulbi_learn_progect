import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type loginSchema } from "../types/loginShema";

const initialState: loginSchema = {
    isLoading: false,
    username: "",
    password: "",
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
