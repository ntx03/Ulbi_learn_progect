import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPageFilters.module.scss';
import {memo, useCallback, useMemo} from 'react';
import {ArticleViewSelector} from "@/entities/Article";
import {articlesPageActions} from "../../model/slices/ArticlesPageSlice/articlesPageSlice";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
    getArticlesPageView
} from "../../model/selectors/articlesPageSelectors/articlesPageSelectors";
import {useTranslation} from "react-i18next";
import Card from "@/shared/ui/Card/Card";
import {Input} from "@/shared/ui/Input/Input";
import {ArticleSortSelector} from "@/features/ArticleSortSelector";
import {type SortOrder} from "@/shared/types";
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {useDebounce} from "@/shared/lib/hooks/useDebounce/useDebounce";
import Tabs, {type TabItem} from "@/shared/ui/Tabs/Tabs";
import {type ArticleSortField, ArticleType, type ArticleView} from "@/entities/Article";

export interface ArticlesPageFiltersProps {
    className?: string
}

const ArticlesPageFilters = ({className}: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('article');
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(()=> {
        dispatch(fetchArticlesList({replace: true}))
    },[dispatch])

    const debouncedFetchData = useDebounce(fetchData, 1000);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch])

    const onChangeType = useCallback((tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData])

    const typeTabs = useMemo<TabItem[]>(()=> [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },
        {
            value: ArticleType.ECONOMY,
            content: t('Экономика')
        },

    ],[t])

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className ?? ''])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}/>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск') ?? ''}/>
            </Card>
            <Tabs tabs={typeTabs} value={type} onTabClick={onChangeType}  />

        </div>
    )
};

export default memo(ArticlesPageFilters);