import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails} from "entities/Article";
import {useNavigate, useParams} from "react-router-dom";
import {Text, TextSize, TextTheme} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import DynamicModuleLoader, {type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getArticleComments} from "../../model/slice/ArticleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import Page from "widgets/Page/Page";
import {
    articlePageRecommendationReducer,
    getArticlePageRecommendations
} from "../../model/slice/ArticleDetailsPageRecomendationSlice";
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading
} from "../../model/selectors/recommendations";
import ArticleList from "entities/Article/ui/ArticleList/ArticleList";
import {fetchArticleRecommendations} from "../../model/services/fetchArticleRecommendations";
import {articleDetailsPageReducer} from "../../model/slice/index";
import ArticlesDetailsPageHeader
    from "../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader";

export interface ArticlesDetailsPageProps {
    className?: string
}
const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}
const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();

    // получаем список коментариев при помощи адаптера
    const comments = useSelector(getArticleComments.selectAll);
    // получаем список рекомендаций при помощи адаптера
    const recommendations = useSelector(getArticlePageRecommendations.selectAll);

    const isLoading = useSelector(getArticleCommentsIsLoading);
    const isLoadingRecommendation = useSelector(getArticleRecommendationsIsLoading);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSendComment = (text: string)=> {
        dispatch(addCommentForArticle(text))
    }

    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                <ArticlesDetailsPageHeader/>
                <ArticleDetails id={id}/>
                {!isLoading && (
                    <>  <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} theme={TextTheme.PRIMARY}/>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <ArticleList articles={recommendations} isLoading={isLoadingRecommendation} className={cls.recommendations} target='_blank'/>
                        <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} theme={TextTheme.PRIMARY}/>
                        <AddCommentForm onSendComment={onSendComment}/>
                        <CommentList  isLoading={isLoading} comments={comments}/>
                    </>
                ) }
            </Page>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlesDetailsPage);