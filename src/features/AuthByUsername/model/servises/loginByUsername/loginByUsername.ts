import { createAsyncThunk } from "@reduxjs/toolkit";
import { type User, userActions } from "@/entities/User";
import i18n from "i18next";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { type ThunkConfig } from "@/app/providers/StoreProvider";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
    // @ts-ignore
        const response = await thunkAPI.extra.api.post<User>("/login", authData);

        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue(
            // eslint-disable-next-line strict-null-checks/all
            i18n.t("Вы ввели неверный логин или пароль")
        );
    }
});
