import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { type Article} from "../../types/articles";

export const fetchArticleById  = createAsyncThunk<
  Article,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string,
  ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
            params: {
                _expand: 'user'
            }
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("error");
    }
});