import axios from "axios";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "features/AuthByUsername/model/servises/loginByUsername/loginByUsername";
import { userActions } from "entities/User";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test("success login", async () => {
    //     const userValue = { username: "123", password: "123" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //
    //     const action = loginByUsername(userValue);
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData({ username: "123", password: "123" })
    //     );
    //     // eslint-disable-next-line @typescript-eslint/unbound-method
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     // eslint-disable-next-line @typescript-eslint/unbound-method
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    // });
    // test("error login", async () => {
    //     const userValue = { username: "123", password: "123" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //
    //     const action = loginByUsername(userValue);
    //
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     // eslint-disable-next-line @typescript-eslint/unbound-method
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    // });
    test("success login", async () => {
        const userValue = { username: "123", password: "123" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledWith(
            // @ts-ignore
            userActions.setAuthData(userValue)
        );

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        const userValue = { username: "123", password: "123" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe(undefined);
    });
});
