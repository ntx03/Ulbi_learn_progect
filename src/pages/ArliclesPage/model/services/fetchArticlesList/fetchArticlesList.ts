import {createAsyncThunk} from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {type Article} from "entities/Article";


export const fetchArticlesList  = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user'
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