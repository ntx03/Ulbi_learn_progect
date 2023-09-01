import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsItem.module.scss';
import { memo } from 'react';
import type { Notifications } from '../../model/types/notifications';
import Card, { CardTheme } from '@/shared/ui/Card/Card';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

export interface NotificationsItemProps {
    className?: string;
    item: Notifications;
}

const NotificationsItem = ({ className, item }: NotificationsItemProps) => {
    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationsItem, {}, [className ?? ''])}>
            <Text title={item.title} text={item.description} theme={TextTheme.PRIMARY} />
        </Card>
    );
    if (item.href) {
        return (
            <a className={cls.link} target='_blank' href={item.href} rel='noreferrer'>
                {content}
            </a>
        );
    }
    return content;
};

export default memo(NotificationsItem);
