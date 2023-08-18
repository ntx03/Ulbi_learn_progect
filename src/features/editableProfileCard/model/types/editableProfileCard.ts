import {type Profile} from "entities/Profile";
import {type ValidateProfileError} from "features/editableProfileCard/model/consts/consts";

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}