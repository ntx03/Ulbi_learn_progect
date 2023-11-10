import cls from './SidebarItem.module.scss';
import AppLinkDeprecated, { AppLinkTheme } from '@/shared/ui/deprecated/AppLink/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import AppLink from '@/shared/ui/redesigned/AppLink/ui/AppLink/AppLink';
import Icon from '@/shared/ui/redesigned/Icon/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

/**
 * Позиция из списка меню навигации по страницам сайта (состоит из названия и иконки)
 */
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation('translation');

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <AppLink
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
                    to={item.path}
                    activeClassName={cls.active}>
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                    to={item.path}
                    theme={AppLinkTheme.SECONDARY}>
                    <item.Icon className={cls.icon} width={25} height={25} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
});

export default SidebarItem;
