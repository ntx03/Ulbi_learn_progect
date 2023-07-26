import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {type AddCommentFormSchema} from "../type/addCommentForm";

const initialState: AddCommentFormSchema = {
    text: "",
    error: "",
};

export const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>){
            state.text = action.payload;
        }
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;