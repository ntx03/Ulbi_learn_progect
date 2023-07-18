import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleDetails} from "entities/Article";
import {useParams} from "react-router-dom";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import DynamicModuleLoader, {type ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsCommentsReducer, getArticleComments} from "../../model/slice/ArticleDetailsCommentsSlice";
import {useDispatch, useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsByArticleId} from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
export interface ArticlesDetailsPageProps {
    className?: string
}
const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
}
const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = (text: string)=> {
        dispatch(addCommentForArticle(text))
    }

    useInitialEffect(()=> dispatch(fetchCommentsByArticleId(id)))

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className ?? ''])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')} theme={TextTheme.PRIMARY}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList  isLoading={isLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>
    )
};

export default memo(ArticlesDetailsPage);