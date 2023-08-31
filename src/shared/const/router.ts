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
    FORBIDDEN = 'forbidden'
}
export const getMainPath = () => '/';
export const getAboutPath = () => '/about';
export const getProfilePath = (id: string) => `/profile/${id}`;
export const getArticlesPath = () => '/articles';
export const getArticlesDetailsPath = (id:string) => `/articles/${id}`;
export const getArticleCreatePath = () => '/articles/new';
export const getArticleEditPath = (id:string) => `/articles/${id}/edit`;
export const getAdminPanelPath = () => '/admin';
export const getForbiddenPath = () => '/forbidden';
