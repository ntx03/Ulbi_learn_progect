import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsItem.module.scss';
import { memo } from 'react';
import type { Notifications } from '../../model/types/notifications';
import CardDeprecated, { CardTheme } from '@/shared/ui/deprecated/Card/Card';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import Card from '@/shared/ui/redesigned/Card/Card';

export interface NotificationsItemProps {
    className?: string;
    item: Notifications;
}

const NotificationsItem = ({ className, item }: NotificationsItemProps) => {
    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card variant={'outlined'} className={classNames(cls.NotificationsItem, {}, [className ?? ''])}>
                    <Text title={item.title} text={item.description} variant={'primary'} />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationsItem, {}, [className ?? ''])}>
                    <TextDeprecated title={item.title} text={item.description} theme={TextTheme.PRIMARY} />
                </CardDeprecated>
            }
        />
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
