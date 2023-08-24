import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss';
import {type HTMLAttributeAnchorTarget, memo} from 'react';
import {type Article} from '../../model/types/articles';
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleListItemSkeleton from "../ArticleListItem/ArticleListItemSkeleton";
import {ArticleView} from "../../model/consts/consts";

export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticleList = ({className, articles, view = ArticleView.SMALL, isLoading, target='_blank'
}: ArticleListProps) => {

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem article={article} view={view} key={article.id} target={target}/>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className ?? ''])}>
            {
                articles.length > 0 ? articles.map(renderArticle) : null
            }
            {isLoading && new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((i, index)=> <ArticleListItemSkeleton view={view} key={index}/>)}
        </div>
    )
};

export default memo(ArticleList);