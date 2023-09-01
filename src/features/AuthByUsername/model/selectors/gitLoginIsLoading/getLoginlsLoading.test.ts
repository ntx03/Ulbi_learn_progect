import { getLoginIsLoading } from '../../selectors/gitLoginIsLoading/getLoginIsLoading';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginsLoading.test', () => {
    test('should get is Loading true', () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state)).toEqual(true);
    });
    test('should get is Loading false', () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state)).toEqual(false);
    });
});
