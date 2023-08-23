import {MainPage} from "@/pages/MainPage/index";
import {AboutPage} from "@/pages/AboutPage/index";
import {NoFoundPage} from "@/pages/NoFoundPage/index";
import {type RouteProps} from "react-router-dom";
import {ProfilePage} from "@/pages/ProfilePage";
import {ArticlePage} from "@/pages/ArliclesPage";
import {ArticlesDetailsPage} from "@/pages/ArticlesDetailsPage";
import {ArticleEditPage} from "@/pages/ArticleEditPage";
import {AdminPanelPage} from "@/pages/AdminPanelPage";
import {ForbiddenPage} from "@/pages/ForbittenPage";
import {UserRole} from "@/entities/User/model/consts/consts";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    role?: UserRole[]
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  // last
  NOT_FOUND = "not_found",
  FORBIDDEN  = 'forbidden'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile", // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: "*",
};

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
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage/>,
        authOnly: true,
        role: [UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage/>,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NoFoundPage />,
    },
};
