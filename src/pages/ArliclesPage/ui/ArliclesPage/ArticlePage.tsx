import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageError } from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useTranslation } from 'react-i18next';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import { Text } from '@/shared/ui/redesigned/Text/Text';
interface ArticlePageProps {
    className?: string;
}

/**
 * Страница со списком статей, фильтрами, переключателями вида статей
 */
const ArticlePage = ({ className }: ArticlePageProps) => {
    const reducers: ReducerList = {
        articlesPage: articlesPageReducer,
    };

    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');

    const error = useSelector(getArticlesPageError);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (error) {
        return (
            <Page className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                <Text title={t('Произошла непредвиденная ошибка')} variant={'error'} />
            </Page>
        );
    }

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            onScrollEnd={onLoadNextPart}
                            data-testid={'ArticlesPage'}
                            className={classNames(cls.ArliclesPageRedesigned, {}, [className ?? ''])}>
                            <ArticleInfiniteList />
                            <ArticlePageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    onScrollEnd={onLoadNextPart}
                    data-testid={'ArticlesPage'}
                    className={classNames(cls.ArliclesPage, {}, [className ?? ''])}>
                    <ArticlesPageFilters />
                    <ArticleInfiniteList />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
