import { type counterSchema } from "../types/counterSchema";
import {buildSlice} from "@/shared/lib/store";

const initialState: counterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions, useActions: useCounterActions, reducer: counterReducer } = counterSlice;

