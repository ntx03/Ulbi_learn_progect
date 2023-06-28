import { type loginSchema } from "features/AuthByUsername";
import { type DeepPartial } from "@reduxjs/toolkit";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<loginSchema> = { username: "andrey" };
        // @ts-ignore
        expect(loginReducer(state, loginActions.setUsername("andrey"))).toEqual({
            username: "andrey",
        });
    });
    test("test set password", () => {
        const state: DeepPartial<loginSchema> = { password: "andrey" };
        // @ts-ignore
        expect(loginReducer(state, loginActions.setPassword("andrey"))).toEqual({
            password: "andrey",
        });
    });
});
