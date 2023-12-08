import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import Select, { type SelectOption } from '@/shared/ui/deprecated/Select/Select';
import { useMemo } from 'react';
import { type SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import ListBox from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

/**
 * Блок с сортировкой статей
 * @param onChangeSort - забираем с поля value
 * @param sort - value sort
 * @param onChangeOrder - забираем с поля value
 * @param order - value order
 */
const ArticleSortSelector = ({ className, onChangeSort, sort, onChangeOrder, order }: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');

    const orderOption = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOption = useMemo<Array<SelectOption<ArticleSortField>>>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className ?? ''])}>
                    <VStack gap={'8'}>
                        <Text title={t('Сортировать по')} />
                        <ListBox items={sortFieldOption} value={sort} onChange={onChangeSort} />
                        <ListBox items={orderOption} value={order} onChange={onChangeOrder} />
                    </VStack>
                </div>
            }
            off={
                <div className={classNames(cls.ArticleSortSelector, {}, [className ?? ''])}>
                    <Select
                        options={sortFieldOption}
                        label={t('Сортировать по') ?? ''}
                        value={sort}
                        onChange={onChangeSort}
                        className={cls.sort}
                    />
                    <Select
                        options={orderOption}
                        label={t('по') ?? ''}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                    />
                </div>
            }
        />
    );
};

export default ArticleSortSelector;
