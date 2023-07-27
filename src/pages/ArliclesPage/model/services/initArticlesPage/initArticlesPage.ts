import {createAsyncThunk} from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesPageInited
} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {articlesPageActions} from "../../slices/ArticlesPageSlice/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";
import {type SortOrder} from "shared/types";
import {type ArticleSortField, type ArticleType} from "entities/Article/model/types/articles";

/**
 * Инициализаруем стейт со статьями и забираем их с сервера
 */
export const initArticlesPage  = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage",  (searchParams, thunkAPI) => {

    const inited = getArticlesPageInited(thunkAPI.getState());

    if (!inited) {
        const sortFromURL = searchParams.get('sort') as ArticleSortField;
        const orderFromURL = searchParams.get('order') as SortOrder;
        const searchFromURL = searchParams.get('search');
        const typeFromURL = searchParams.get('type') as ArticleType;
        if (sortFromURL) {
            thunkAPI.dispatch(articlesPageActions.setSort(sortFromURL as ArticleSortField))
        }

        if (orderFromURL) {
            thunkAPI.dispatch(articlesPageActions.setOrder(orderFromURL))
        }

        if (searchFromURL) {
            thunkAPI.dispatch(articlesPageActions.setSearch(searchFromURL))
        }

        if (typeFromURL) {
            thunkAPI.dispatch(articlesPageActions.setSearch(typeFromURL))
        }

        thunkAPI.dispatch(articlesPageActions.initState());
        thunkAPI.dispatch(fetchArticlesList({}));
    }
});