import { type Article } from './model/types/articles';
import { type ArticleDetailsSchema } from '../Article/model/types/articleDetailsSchema';
// import {ArticleViewSelector} from "@/features/ArticleViewSelector";
import ArticleList from './ui/ArticleList/ArticleList';
import { ArticleType, ArticleBlockType, ArticleView, ArticleSortField } from '../Article/model/consts/consts';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../Article/model/selectors/articleDetails';
export {
    type Article,
    type ArticleDetailsSchema,
    ArticleList,
    ArticleBlockType,
    ArticleType,
    ArticleView,
    ArticleSortField,
    articleDetailsReducer,
};
