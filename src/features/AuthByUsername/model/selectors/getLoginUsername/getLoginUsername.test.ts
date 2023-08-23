import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "@/app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                username: "andrey",
            },
        };
        expect(getLoginUsername(state)).toEqual("andrey");
    });
});
