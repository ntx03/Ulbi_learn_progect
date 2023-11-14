import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import AvatarDeprecated from '@/shared/ui/deprecated/Avatar/Avatar';
import SkeletonDeprecated from '@/shared/ui/deprecated/Skeleton/Skeleton';
import SkeletonRedesigned from '@/shared/ui/redesigned/Skeleton/Skeleton';
import AppLinkDeprecated from '@/shared/ui/deprecated/AppLink/ui/AppLink/AppLink';
import { getProfilePath } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import Avatar from '@/shared/ui/redesigned/Avatar/Avatar';
import AppLink from '@/shared/ui/redesigned/AppLink/ui/AppLink/AppLink';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

export interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                // <Card padding={'24'} border={'round'} max>
                <HStack
                    gap={'16'}
                    align={'start'}
                    className={classNames(cls.CommentCardRedesigned, {}, [className ?? ''])}>
                    <AppLink to={getProfilePath(comment?.user.id)} className={cls.header}>
                        {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : <div></div>}
                    </AppLink>
                    <Text text={comment?.text} variant={'primary'} className={cls.textRedesigned} />
                </HStack>
                // </Card>
            }
            off={
                <div className={classNames(cls.CommentCard, {}, [className ?? ''])}>
                    <AppLinkDeprecated to={getProfilePath(comment?.user.id)} className={cls.header}>
                        {comment?.user.avatar ? <AvatarDeprecated size={30} src={comment?.user.avatar} /> : <div></div>}
                        <TextDeprecated
                            className={cls.username}
                            title={comment?.user.username}
                            theme={TextTheme.PRIMARY}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment?.text} theme={TextTheme.PRIMARY} />
                </div>
            }
        />
    );
};

export default memo(CommentCard);
