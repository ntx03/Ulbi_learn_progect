import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {memo, useCallback,} from "react";
import ArticleList from "entities/Article/ui/ArticleList/ArticleList";
import {type Article} from "entities/Article";

import {DynamicModuleLoader, type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articlesPageReducer,
    getArticle
} from "../../model/slices/ArticlesPageSlice/articlesPageSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import Page from "widgets/Page/Page";
import {fetchNextArticlesPage} from "pages/ArliclesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {initArticlesPage} from "pages/ArliclesPage/model/services/initArticlesPage/initArticlesPage";
import ArticlesPageFilters from "pages/ArliclesPage/ui/ArticlesPageFilters/ArticlesPageFilters";
import {useSearchParams} from 'react-router-dom'
interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {

    const reducers: ReducerList = {
        articlesPage: articlesPageReducer,
    }

    const dispatch = useAppDispatch();
    const {t} = useTranslation('article');

    // получаем из стейта Redux все статьи
    const articles: Article[] = useSelector(getArticle.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);

    const view = useSelector(getArticlesPageView);

    const error = useSelector(getArticlesPageError);

    const [searchParams] = useSearchParams();
    console.log(searchParams);

    const onLoadNextPart = useCallback(()=> {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(()=>{
        dispatch(initArticlesPage(searchParams));
    })

    if (error) {
        return (
            <Page className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                <Text title={t('Произошла непредвиденная ошибка')} theme={TextTheme.ERROR}/>\
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                <ArticlesPageFilters/>
                <ArticleList view={view} articles={articles} isLoading={isLoading} className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlePage);