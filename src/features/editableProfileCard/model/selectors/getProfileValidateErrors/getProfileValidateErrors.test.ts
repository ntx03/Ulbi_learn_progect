import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { type DeepPartial } from "../../../../../../config/build/types/config";


import {ValidateProfileError} from "features/editableProfileCard/model/consts/consts";

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
        // eslint-disable-next-line strict-null-checks/all
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
