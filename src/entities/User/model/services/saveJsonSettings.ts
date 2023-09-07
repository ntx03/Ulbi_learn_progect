import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';

import { type JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    // @ts-ignore
    async (newJsonSettings, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState());
        const currentSetting = getJsonSettings(thunkAPI.getState());

        if (!userData) {
            return thunkAPI.rejectWithValue('');
        }

        try {
            const response = await thunkAPI
                .dispatch(
                    setJsonSettingMutation({
                        userID: userData.id,
                        jsonSettings: {
                            ...currentSetting,
                            ...newJsonSettings,
                        },
                    }),
                )
                .unwrap();
            if (!response.jsonSettings) {
                return thunkAPI.rejectWithValue('');
            }
            return response.jsonSettings;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('');
        }
    },
);
