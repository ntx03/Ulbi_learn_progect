import {rtkQueryApi} from "@/shared/api/RTKQueryApi";
import type {Rating} from "@/entities/Rating";

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feetback?: string;
}

const articleRatingApi = rtkQueryApi.injectEndpoints({
    endpoints: (build) => ({

        // userId and articleId - это ло что нужно будет передать в хук useGetArticleRating
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({userId, articleId}) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg
            }),
        }),
    }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;