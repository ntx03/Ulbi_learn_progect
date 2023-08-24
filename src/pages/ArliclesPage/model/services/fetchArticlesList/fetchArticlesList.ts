import {createAsyncThunk} from "@reduxjs/toolkit";
import {type ThunkConfig} from "@/app/providers/StoreProvider";
import {type Article} from "@/entities/Article";
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from "../../selectors/articlesPageSelectors/articlesPageSelectors";
import {addQueryParams} from "@/shared/lib/url/addQueryParams/addQueryParams";

import {ArticleType} from "@/entities/Article";


interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList  = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {

    const order = getArticlesPageOrder(thunkAPI.getState());
    const sort = getArticlesPageSort(thunkAPI.getState());
    const search = getArticlesPageSearch(thunkAPI.getState());
    const page = getArticlesPageNumber(thunkAPI.getState());
    const type = getArticlesPageType((thunkAPI.getState()));

    const limit = getArticlesPageLimit(thunkAPI.getState())

    try {
        addQueryParams({
            sort, order, search, type
        })
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type
            }
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("error");
    }
});