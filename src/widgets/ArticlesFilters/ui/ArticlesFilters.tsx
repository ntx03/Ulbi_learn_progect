import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { memo, useMemo } from 'react';
import Card from '@/shared/ui/redesigned/Card/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { type TabItem } from '@/shared/ui/deprecated/Tabs/Tabs';
import { type ArticleSortField, ArticleType } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { type SortOrder } from '@/shared/types/sort';
import { VStack } from '@/shared/ui/redesigned/Stack';
import Tabs from '@/shared/ui/redesigned/Tabs/Tabs';
import { Input } from '@/shared/ui/redesigned/Input/Input';

export interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeSearch: (value: string) => void;
    onChangeType: (newType: TabItem) => void;
    value?: string;
}

const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const { className, type, onChangeType, sort, onChangeOrder, order, onChangeSort, onChangeSearch, search } = props;
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
        <Card className={classNames(cls.ArticlesFilters, {}, [className ?? ''])} padding={'24'}>
            <VStack gap={'32'}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск') ?? ''} />
                <Tabs tabs={typeTabs} value={type} direction={'column'} onTabClick={onChangeType} />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
};

export default memo(ArticlesFilters);
