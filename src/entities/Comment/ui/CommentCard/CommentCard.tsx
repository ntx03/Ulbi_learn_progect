import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import AppLink from '@/shared/ui/AppLink/ui/AppLink/AppLink';

import { getProfilePath } from '@/shared/const/router';

export interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className ?? '', cls.isLoading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className ?? ''])}>
            <AppLink to={getProfilePath(comment?.user.id)} className={cls.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : <div></div>}
                <Text className={cls.username} title={comment?.user.username} theme={TextTheme.PRIMARY} />
            </AppLink>
            <Text text={comment?.text} theme={TextTheme.PRIMARY} />
        </div>
    );
};

export default memo(CommentCard);
