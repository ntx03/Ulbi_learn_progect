import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import {memo, useCallback,} from "react";
import {DynamicModuleLoader, type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articlesPageReducer,
    getArticle
} from "../../model/slices/ArticlesPageSlice/articlesPageSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticlesPageError,
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import Page from "widgets/Page/Page";
import {fetchNextArticlesPage} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters";
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({className}: ArticlePageProps) => {

    const reducers: ReducerList = {
        articlesPage: articlesPageReducer,
    }

    const dispatch = useAppDispatch();
    const {t} = useTranslation('article');

    const error = useSelector(getArticlesPageError);

    const onLoadNextPart = useCallback(()=> {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

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
                <ArticleInfiniteList/>
            </Page>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlePage);