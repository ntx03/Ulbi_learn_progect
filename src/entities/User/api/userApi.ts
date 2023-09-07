import { rtkQueryApi } from '@/shared/api/RTKQueryApi';
import { type User } from '../model/types/user';
import { type JsonSettings } from '../model/types/jsonSettings';

interface SetJsonSettingsArg {
    userID: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkQueryApi.injectEndpoints({
    endpoints: (build) => ({
        // null - это ло что нужно будет передать в хук useNotifications
        setJsonSetting: build.mutation<User, SetJsonSettingsArg>({
            query: ({ userID, jsonSettings }) => ({
                url: `/users/${userID}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userID) => ({
                url: `/users/${userID}`,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingMutation = userApi.endpoints.setJsonSetting.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
