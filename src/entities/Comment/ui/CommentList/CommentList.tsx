import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { memo } from 'react';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { useTranslation } from 'react-i18next';
import CommentCard from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';

export interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

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

    return (
        <div className={classNames(cls.CommentList, {}, [className ?? ''])}>
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={index} />
                ))
            ) : (
                <Text theme={TextTheme.PRIMARY} text={t('Комментарии отсутстсуют')} />
            )}
        </div>
    );
};

export default memo(CommentList);
