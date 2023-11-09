import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export interface FiltersContainerProps {
    className?: string;
}

const FiltersContainer = ({ className }: FiltersContainerProps) => {
    const { type, sort, order, search, onChangeSearch, onChangeOrder, onChangeType, onChangeSort } =
        useArticleFilters();
    return (
        <ArticlesFilters
            type={type}
            sort={sort}
            order={order}
            search={search}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            className={classNames('', {}, [className ?? ''])}></ArticlesFilters>
    );
};

export default memo(FiltersContainer);
