import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { type Article} from "./model/types/articles";
import { type ArticleDetailsSchema} from "entities/Article/model/types/articleDetailsSchema";
import ArticleViewSelector from "features/ArticleViewSelector/ArticleViewSelector";
export  { getArticleDetailsData , getArticleDetailsError, getArticleDetailsIsLoading} from '../Article/model/selectors/articleDetails'
export { ArticleDetails, type Article, type ArticleDetailsSchema, ArticleViewSelector }