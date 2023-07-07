import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { type DeepPartial } from "../../../../../../config/build/types/config";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

describe("getProfileReadonly.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
