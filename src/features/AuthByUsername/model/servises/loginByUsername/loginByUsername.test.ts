import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {loginByUsername} from "../../servises/loginByUsername/loginByUsername";
import {userActions} from "entities/User";

// jest.mock("axios");
//
// const mockedAxios = jest.mocked(api, true);

describe("loginByUsername.test", () => {
    test("success login", async () => {
        const userValue = { username: "123", password: "123" };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledWith(
            // @ts-ignore
            userActions.setAuthData(userValue)
        );

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        const userValue = { username: "123", password: "123" };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        // eslint-disable-next-line strict-null-checks/all
        expect(result.payload).toBe(undefined);
    });
});
