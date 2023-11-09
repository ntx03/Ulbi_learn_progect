import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export interface ViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer = ({ className }: ViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();
    return <ArticleViewSelector view={view} onViewClick={onChangeView} className={className} />;
};

export default memo(ViewSelectorContainer);
