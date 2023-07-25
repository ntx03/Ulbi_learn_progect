import {createAsyncThunk} from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesPageInited
} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {articlesPageActions} from "../../slices/ArticlesPageSlice/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";

/**
 * Инициализаруем стейт со статьями и забираем их с сервера
 */
export const initArticlesPage  = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage",  (_, thunkAPI) => {

    const inited = getArticlesPageInited(thunkAPI.getState());

    if (!inited) {
        thunkAPI.dispatch(articlesPageActions.initState());
        thunkAPI.dispatch(fetchArticlesList({
            page: 1
        }));
    }
});