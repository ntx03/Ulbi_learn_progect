import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {memo, useCallback} from "react";
import ArticleList from "entities/Article/ui/ArticleList/ArticleList";
import {type Article, ArticleViewSelector} from "entities/Article";
import {ArticleBlockType, ArticleType, type ArticleView} from "entities/Article/model/types/articles";
import {DynamicModuleLoader, type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articlesPageActions,
    articlesPageReducer,
    getArticle
} from "../../model/slices/ArticlesPageSlice/articlesPageSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticlesList} from "pages/ArliclesPage/model/services/fetchArticlesList/fetchArticlesList";
import {useSelector} from "react-redux";
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNumber, getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import Page from "shared/ui/Page/Page";

interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {

    const reducers: ReducerList = {
        articlesPage: articlesPageReducer,
    }

    const dispatch = useAppDispatch();

    useInitialEffect(()=>{
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1
        }));
    })

    // получаем из стейта Redux все статьи
    const articles: Article[] = useSelector(getArticle.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);

    const view = useSelector(getArticlesPageView);

    const page = useSelector(getArticlesPageNumber);

    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch])

    const onLoadNextPart = useCallback(()=> {
        if ( hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(Number(page) + 1 ))
            dispatch(fetchArticlesList({
                page: Number(page) + 1
            }));
        }

    }, [hasMore, isLoading, dispatch, page])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList view={view} articles={articles} isLoading={isLoading}/>
            </Page>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlePage);