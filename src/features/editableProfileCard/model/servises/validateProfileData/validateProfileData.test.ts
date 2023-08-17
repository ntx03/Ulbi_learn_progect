import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";


import {ValidateProfileError} from "features/editableProfileCard/model/consts/consts";

const data = {
    username: "ntx033",
    first: "Andrey",
    lastname: "Kachur",
    age: 36,
    country: Country.Russia,
    city: "Thumen",
    currency: Currency.RUB,
    avatar:
    "https://avatars.mds.yandex.net/i?id=b54721c405ec096ac675c679543227959a1eb426-9181172-images-thumbs&n=13",
};

describe("validateProfileData.test", () => {
    test("success", () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("without first and last name", () => {
        const result = validateProfileData({ ...data, first: "" });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test("without age", () => {
        const result = validateProfileData({ ...data, age: 36.5 });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test("without country", () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test("without last and age", () => {
        const result = validateProfileData({ ...data, lastname: "", age: 36.5 });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("null profile validate", () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
