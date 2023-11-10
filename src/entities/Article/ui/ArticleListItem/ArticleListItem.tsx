import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { type Article } from '../../model/types/articles';
import { type ArticleView } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import ArticleListItemDeprecated from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import ArticleListItemRedesigned from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

/**
 * компонент отображающий список всех статей, когда заходишь на старницу со статьями
 * @param article - все статьи
 * @param view - вид отображения статей (плиткой или крупный)
 * @param target - вроде как выбранная статья (надо вспомнить)!!
 */
const ArticleListItem = ({ className, article, view, target }: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticleListItemRedesigned article={article} view={view} target={target} className={className} />}
            off={<ArticleListItemDeprecated article={article} view={view} target={target} className={className} />}
        />
    );
};

export default memo(ArticleListItem);
