import { type ArticlesDetailsCommentsSchema, type ArticlesDetailsRecommendationSchema } from '../../index';

export interface ArticleDetailsPageSchema {
    comments: ArticlesDetailsCommentsSchema;
    recommendations: ArticlesDetailsRecommendationSchema;
}
