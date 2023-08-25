import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "@/entities/User";
import MainIcon from "@/shared/assets/icons/Vector.svg";
import AboutIcon from "@/shared/assets/icons/aboutIcon.svg";
import ProfileIcon from "@/shared/assets/icons/Profile_icon.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import type { SidebarItemType} from "../types/sidebar";
import {RoutePath} from "@/shared/const/router";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] =[
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: "Главная",
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: "О сайте",
            },

        ]
        if (userData) {
            sidebarItemsList.push(
                {
                    path: `${RoutePath.profile}/${userData.id}`,
                    Icon: ProfileIcon,
                    text: "Профиль",
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: "Статьи",
                    authOnly: true,
                },
            )
        }
        return sidebarItemsList;
    }
)