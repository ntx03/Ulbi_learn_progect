import { type DeepPartial } from "@reduxjs/toolkit";
import { profileActions, profileReducer } from "../slice/ProfileSlice";
import { type ProfileSchema } from "../types/profile";
import { updateProfileData } from "entities/Profile";

describe("profileSlice.test", () => {
    test("test setReadonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
        ).toEqual({ readonly: true });
    });
    test("test cancelEdit", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({ readonly: true, validateError: undefined, form: undefined });
    });
    test("test updateProfile", () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: "Andrey" } };
        expect(
            profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "Andrey" })
            )
        ).toEqual({ form: { username: "Andrey" } });
    });
    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [],
            error: "error",
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateError: [],
            error: undefined,
        });
    });
    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            form: { lastname: "Andrey" },
        };
        expect(
            profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled({ lastname: "Dmitrii" }, "")
            )
        ).toEqual({
            isLoading: false,
            readonly: true,
            form: { lastname: "Dmitrii" },
            data: { lastname: "Dmitrii" },
            error: undefined,
        });
    });
});
