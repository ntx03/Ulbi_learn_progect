import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

/**
 * Компонент отображающий комментрии к статье
 * @param id - статьи  к которой относятся комментарии
 * @constructor
 */
const ArticleDetailsComments = ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    // получаем список коментариев при помощи адаптера
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = (text: string) => {
        dispatch(addCommentForArticle(text));
    };
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <VStack max gap={'16'} className={classNames('', {}, [className ?? ''])}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text size={'l'} className={''} title={t('Комментарии')} variant={'primary'} bold />}
                off={
                    <TextDeprecated
                        size={TextSize.L}
                        className={''}
                        title={t('Комментарии')}
                        theme={TextTheme.PRIMARY}
                    />
                }
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
};

export default memo(ArticleDetailsComments);
