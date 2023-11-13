import { rtkQueryApi } from '@/shared/api/RTKQueryApi';
import { type FeatureFlag } from '@/shared/types/featureFlag';

interface UpdateFeatureFlagsOptions {
    userId: string;
    features: Partial<FeatureFlag>;
}

const featureFlagsApi = rtkQueryApi.injectEndpoints({
    endpoints: (build) => ({
        // userId and articleId - это ло что нужно будет передать в хук useGetArticleRating
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
