import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";
import { type DeepPartial } from "../../../../../config/build/types/config";

describe("getProfileReadonly.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
});
