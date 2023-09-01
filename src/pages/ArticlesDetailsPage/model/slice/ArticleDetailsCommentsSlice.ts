import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Comment } from '@/entities/Comment';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { type ArticlesDetailsCommentsSchema } from '../types/ArticlesDetailsCommentsSchema';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

// для нормалзации данных
const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticlesDetailsCommentsSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                // commentsAdapter сам добавляет id и enteties для нормализации данных
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
