import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleInfiniteList.module.scss';
import {memo} from 'react';
import {type Article} from "entities/Article";
import {useSelector} from "react-redux";
import {getArticle} from '../../model/slices/ArticlesPageSlice/articlesPageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import {useSearchParams} from "react-router-dom";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import ArticleList from "entities/Article/ui/ArticleList/ArticleList";

export interface ArticleInfiniteListProps {
    className?: string
}

const ArticleInfiniteList = ({className}: ArticleInfiniteListProps) => {

    const dispatch = useAppDispatch();
    // получаем из стейта Redux все статьи
    const articles: Article[] = useSelector(getArticle.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);

    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();

    useInitialEffect(()=>{
        dispatch(initArticlesPage(searchParams));
    })
    return (
        <div className={classNames('', {}, [className ?? ''])}>
            <ArticleList view={view} articles={articles} isLoading={isLoading} className={cls.list}/>
        </div>
    )
};

export default memo(ArticleInfiniteList);