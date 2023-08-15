import {rtkQueryApi} from "shared/api/RTKQueryApi";

const recommendationsApi = rtkQueryApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    }),
})

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;