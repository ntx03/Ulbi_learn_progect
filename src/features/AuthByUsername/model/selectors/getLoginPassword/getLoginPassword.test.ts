import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                password: "123",
            },
        };
        expect(getLoginPassword(state)).toEqual("123");
    });
});
