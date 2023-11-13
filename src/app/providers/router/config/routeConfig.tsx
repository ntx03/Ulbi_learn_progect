import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/ArliclesPage';
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbittenPage';
import { NoFoundPage } from '@/pages/NoFoundPage';
import { type AppRoutesProps } from '@/shared/types/router';
import {
    AppRoutes,
    getAboutPath,
    getAdminPanelPath,
    getArticleCreatePath,
    getArticleEditPath,
    getArticlesDetailsPath,
    getArticlesPath,
    getForbiddenPath,
    getMainPath,
    getProfilePath,
    getSettingsPath,
} from '@/shared/const/router';
import { SettingsPage } from '@/pages/SettingsPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getMainPath(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getAboutPath(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getProfilePath(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getArticlesPath(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getArticlesDetailsPath(':id'),
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getArticleCreatePath(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getArticleEditPath(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getAdminPanelPath(),
        element: <AdminPanelPage />,
        authOnly: true,
        role: [UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getForbiddenPath(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getSettingsPath(),
        element: <SettingsPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NoFoundPage />,
    },
};
