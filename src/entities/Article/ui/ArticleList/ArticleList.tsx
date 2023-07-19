import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss';
import {memo} from 'react';
import {type Article, ArticleView} from '../../model/types/articles';
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleListItemSkeleton from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";


export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}



const ArticleList = ({className, articles, view = ArticleView.SMALL, isLoading
}: ArticleListProps) => {

    if (isLoading) {
        return (
            <div className={cls.ArticleList}>
                {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((i, index)=> <ArticleListItemSkeleton view={view} key={index}/>)}
            </div>
        ) 
    }
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem article={article} view={view} key={article.id}/>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className ?? ''])}>
            {
                articles.length > 0 ? articles.map(renderArticle) : null
            }
        </div>
    )
};

export default memo(ArticleList);