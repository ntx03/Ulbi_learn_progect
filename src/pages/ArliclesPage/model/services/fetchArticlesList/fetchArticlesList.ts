import {createAsyncThunk} from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {type Article} from "entities/Article";
import {getArticlesPageLimit} from "../../selectors/articlesPageSelectors/articlesPageSelectors";

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList  = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {

    const { page = 1 } = props;

    const limit = getArticlesPageLimit(thunkAPI.getState())

    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page
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