import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import i18n from 'i18next';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { type Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<any, string, ThunkConfig<string>>(
    'articleDetailsPage/addCommentForArticle',
    async (text, thunkAPI) => {
        const { getState, extra, dispatch, rejectWithValue } = thunkAPI;

        const userData = getUserAuthData(getState());

        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return isRejectedWithValue('no data');
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    },
);
