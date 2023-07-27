import {createAsyncThunk} from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageNumber
} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {articlesPageActions} from "../../slices/ArticlesPageSlice/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";

/**
 * Запрашиваем новую порцию статей с сервера при ленивой прокрутке
 */
export const fetchNextArticlesPage  = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage",  (_, thunkAPI) => {

    const hasMore = getArticlesPageHasMore(thunkAPI.getState());
    const isLoading = getArticlesPageIsLoading(thunkAPI.getState());
    const page = getArticlesPageNumber(thunkAPI.getState());


    if ( hasMore && !isLoading) {
        thunkAPI.dispatch(articlesPageActions.setPage(Number(page) + 1 ))
        thunkAPI.dispatch(fetchArticlesList({}));
    }

});