import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { memo } from 'react';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { useTranslation } from 'react-i18next';
import CommentCard from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';
import Card from '@/shared/ui/redesigned/Card/Card';

export interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

/**
 * Список комментариев к статье
 * @param comments - комменты которе есть к статье
 * @param isLoading - состояние загрузки (true or false)
 */
const CommentList = ({ className, comments = [], isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className ?? ''])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </div>
        );
    }
    const commentContent = () => {
        return (
            <>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={index} />
                    ))
                ) : (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Text variant={'primary'} text={t('Комментарии отсутстсуют')} />}
                        off={<TextDeprecated theme={TextTheme.PRIMARY} text={t('Комментарии отсутстсуют')} />}
                    />
                )}
            </>
        );
    };
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    padding={'24'}
                    border={'round'}
                    className={classNames(cls.CommentListRedesigned, {}, [className ?? ''])}>
                    {commentContent()}
                </Card>
            }
            off={<div className={classNames(cls.CommentList, {}, [className ?? ''])}>{commentContent()}</div>}
        />
    );
};

export default memo(CommentList);
