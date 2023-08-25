import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {ProfilePage} from "@/pages/ProfilePage";
import {ArticlePage} from "@/pages/ArliclesPage";
import {ArticlesDetailsPage} from "@/pages/ArticlesDetailsPage";
import {ArticleEditPage} from "@/pages/ArticleEditPage";
import {AdminPanelPage} from "@/pages/AdminPanelPage";
import {UserRole} from "@/entities/User";
import {ForbiddenPage} from "@/pages/ForbittenPage";
import {NoFoundPage} from "@/pages/NoFoundPage";
import {type AppRoutesProps} from "@/shared/types/router";
import {AppRoutes, RoutePath} from "@/shared/const/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        role: [UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NoFoundPage />,
    },
};