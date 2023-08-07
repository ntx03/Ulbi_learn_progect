import {combineReducers} from "@reduxjs/toolkit";
import {type ArticleDetailsPageSchema} from "../types";
import {
    articlePageRecommendationReducer
} from "../slice/ArticleDetailsPageRecomendationSlice";
import {articleDetailsCommentsReducer} from "../slice/ArticleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articlePageRecommendationReducer,
    comments: articleDetailsCommentsReducer
})
