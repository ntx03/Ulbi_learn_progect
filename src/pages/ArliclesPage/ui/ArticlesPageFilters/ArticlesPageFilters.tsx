import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { memo, useMemo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useTranslation } from 'react-i18next';
import Card from '@/shared/ui/deprecated/Card/Card';
import { Input } from '@/shared/ui/deprecated/Input/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import Tabs, { type TabItem } from '@/shared/ui/deprecated/Tabs/Tabs';
import { ArticleType } from '@/entities/Article';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export interface ArticlesPageFiltersProps {
    className?: string;
}

const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
    const { sort, order, onChangeOrder, onChangeSort, onChangeSearch, onChangeType, onChangeView, view, type, search } =
        useArticleFilters();
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMY,
                content: t('Экономика'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className ?? ''])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск') ?? ''} />
            </Card>
            <Tabs tabs={typeTabs} value={type} onTabClick={onChangeType} />
        </div>
    );
};

export default memo(ArticlesPageFilters);
