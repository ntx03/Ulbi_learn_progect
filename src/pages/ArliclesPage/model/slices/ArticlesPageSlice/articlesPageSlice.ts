import {createEntityAdapter, createSlice, type PayloadAction,} from '@reduxjs/toolkit'
import {type Article} from "entities/Article";
import {type StateSchema} from "app/providers/StoreProvider";
import {type ArticlesPageSchema} from "../../types/articlesPageSchema";
import {ArticleView} from "entities/Article/model/types/articles";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";

// нормализация данных, к каждому объекту добавляем id, для лучшего поиска
const articlesAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
})

// получаем все селекторы благодоря нормализации articlesAdapter
export const getArticle = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: '',
        view: ArticleView.SMALL,
        ids: [],
        entities: {}
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: state => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    // commentsAdapter сам добавляет id и enteties для нормализации данных
                    articlesAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;