import {createEntityAdapter, createSlice, type PayloadAction,} from '@reduxjs/toolkit'
import {type Article} from "@/entities/Article";
import {type StateSchema} from "@/app/providers/StoreProvider";
import {type ArticlesPageSchema} from "../../types/articlesPageSchema";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";
import {ARTICLE_VIEW_LOCALSTORAGE_KEY} from "@/shared/const/localstorage";
import {type SortOrder} from "@/shared/types";
import {ArticleSortField, ArticleType, ArticleView} from "@/entities/Article/model/consts/consts";

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
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
        search: '',
        sort: ArticleSortField.CREATED,
        order: 'asc',
        type: ArticleType.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    // commentsAdapter сам добавляет id и enteties для нормализации данных
                    // articlesAdapter.addMany(state, action.payload)
                    if (state.limit !== undefined) {
                        state.hasMore = action.payload.length >= state.limit;
                    }


                    if (action.meta.arg.replace) {
                        articlesAdapter.setAll(state, action.payload)
                    } else {
                        articlesAdapter.addMany(state, action.payload)
                    }
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;