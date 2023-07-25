import {type EntityState} from "@reduxjs/toolkit";
import { type Article} from "entities/Article";
import {type ArticleView} from "entities/Article/model/types/articles";

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited: boolean;
}