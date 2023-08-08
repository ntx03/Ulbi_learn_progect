import {
    createEntityAdapter,
    createSlice, type PayloadAction,
} from '@reduxjs/toolkit'
import {type StateSchema} from "app/providers/StoreProvider";
import {
    type ArticlesDetailsRecommendationSchema
} from "../types/ArticleDetailsRecommendationSchema";
import {type Article} from "entities/Article";
import {fetchArticleRecommendations} from "pages/ArticlesDetailsPage/model/services/fetchArticleRecommendations";

// для нормализации данных этот адаптер
const recommendationAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
})

export const getArticlePageRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState()
)

const articlePageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState: recommendationAdapter.getInitialState<ArticlesDetailsRecommendationSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    // commentsAdapter сам добавляет id и enteties для нормализации данных
                    recommendationAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    },
})

export const { reducer: articlePageRecommendationReducer} = articlePageRecommendationSlice;