import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/Vector.svg';
import AboutIconDeprecated from '@/shared/assets/icons/aboutIcon.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/Profile_icon.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/redisigned/home.svg';
import AboutIcon from '@/shared/assets/icons/redisigned/Info.svg';
import ProfileIcon from '@/shared/assets/icons/redisigned/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/redisigned/notification.svg';
import type { SidebarItemType } from '../types/sidebar';
import { getAboutPath, getArticlesPath, getMainPath, getProfilePath } from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getMainPath(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getAboutPath(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getProfilePath(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getArticlesPath(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
