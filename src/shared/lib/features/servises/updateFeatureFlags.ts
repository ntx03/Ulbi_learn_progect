import { type FeatureFlag } from '@/shared/types/featureFlag';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeaturesFlag } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: FeatureFlag;
}
export const updateFeatureFlag = createAsyncThunk<void, UpdateFeatureFlagsOptions, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async ({ userId, newFeatures }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        try {
            await dispatch(
                updateFeatureFlagsMutation({
                    userId,
                    features: { ...getAllFeaturesFlag(), ...newFeatures },
                }),
            );
            window.location.reload();
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
