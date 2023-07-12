import {type Article} from "../types/articles";

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;

}