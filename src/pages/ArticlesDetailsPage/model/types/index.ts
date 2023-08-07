import {type ArticlesDetailsCommentsSchema, type ArticlesDetailsRecommendationSchema} from "pages/ArticlesDetailsPage";

export interface ArticleDetailsPageSchema {
    comments: ArticlesDetailsCommentsSchema;
    recommendations: ArticlesDetailsRecommendationSchema;
}