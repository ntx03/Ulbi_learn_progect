import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { type Article} from "./model/types/articles";
import { type ArticleDetailsSchema} from "../Article/model/types/articleDetailsSchema";
import ArticleViewSelector from "@/features/ArticleViewSelector/ArticleViewSelector";
import ArticleList from './ui/ArticleList/ArticleList';
export  {getArticleDetailsData , getArticleDetailsError, getArticleDetailsIsLoading} from '../Article/model/selectors/articleDetails'
export { ArticleDetails, type Article, type ArticleDetailsSchema, ArticleViewSelector, ArticleList }