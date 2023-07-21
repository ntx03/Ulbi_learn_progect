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
    getArticlesPageError,
    getArticlesPageIsLoading, getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";

interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {

    const reducers: ReducerList = {
        articlesPage: articlesPageReducer,
    }

    const dispatch = useAppDispatch();

    useInitialEffect(()=>{
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    })

    // получаем из стейта Redux все статьи
    const articles: Article[] = useSelector(getArticle.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);
    // const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList view={view} articles={articles} isLoading={isLoading}/>
            </div>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlePage);