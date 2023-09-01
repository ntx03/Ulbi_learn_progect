import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Vector.svg';
import AboutIcon from '@/shared/assets/icons/aboutIcon.svg';
import ProfileIcon from '@/shared/assets/icons/Profile_icon.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import type { SidebarItemType } from '../types/sidebar';
import { getAboutPath, getArticlesPath, getMainPath, getProfilePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getMainPath(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getAboutPath(),
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getProfilePath(userData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getArticlesPath(),
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
