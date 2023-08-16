import {classNames} from 'shared/lib/classNames/classNames'
import {memo} from 'react';
import {Text, TextSize, TextTheme} from "shared/ui/Text/Text";
import {AddCommentForm} from "features/addCommentForm";
import {CommentList} from "entities/Comment";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {getArticleComments} from '../../model/slice/ArticleDetailsCommentsSlice';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId';

export interface ArticleDetailsCommentsProps {
    className?: string
    id: string;
}

const ArticleDetailsComments = ({className, id}: ArticleDetailsCommentsProps) => {

    const {t} = useTranslation('article');
    const dispatch = useAppDispatch();

    // получаем список коментариев при помощи адаптера
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = (text: string)=> {
        dispatch(addCommentForArticle(text))
    }
    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id));
    })
    return (
        <div className={classNames('', {}, [className ?? ''])}>
            <Text size={TextSize.L} className={''} title={t('Комментарии')} theme={TextTheme.PRIMARY}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList  isLoading={isLoading} comments={comments}/>
        </div>
    )
};

export default memo(ArticleDetailsComments);