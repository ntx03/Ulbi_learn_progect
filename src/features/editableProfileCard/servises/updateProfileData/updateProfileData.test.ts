import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../../../entities/Profile/model/types/profile";

const data = {
    id: '1',
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

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("server error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test("no data", async () => {
        const thunk = new TestAsyncThunk(updateProfileData);
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        // eslint-disable-next-line strict-null-checks/all
        expect(result.payload).toEqual(undefined);
    });
});
