import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { type DeepPartial } from "../../../../../../config/build/types/config";

describe("getProfileForm.test", () => {
    test("should return form", () => {
        const form = {
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

        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test("should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line strict-null-checks/all
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
