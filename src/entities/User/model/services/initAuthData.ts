import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';

import { type User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    // @ts-ignore
    async (newJsonSettings, thunkAPI) => {
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (!userId) {
            return thunkAPI.rejectWithValue('');
        }
        try {
            const response = await thunkAPI.dispatch(getUserDataByIdQuery(userId)).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('');
        }
    },
);
