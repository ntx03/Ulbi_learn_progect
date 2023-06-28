import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                error: "error",
            },
        };
        expect(getLoginError(state)).toEqual("error");
    });
});
