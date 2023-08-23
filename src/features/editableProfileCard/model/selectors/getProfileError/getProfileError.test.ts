import { type StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";
import { type DeepPartial } from "../../../../../../config/build/types/config";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("error");
    });
    test("should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual("");
    });
});
