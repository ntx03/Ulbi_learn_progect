export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    SETTINGS = 'settings',
    // last
    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
}

/**
 * Роут главной страницы '/'
 */
export const getMainPath = () => '/';
/**
 * Роут страницы обо мне '/about'
 */
export const getAboutPath = () => '/about';
/**
 * Роут  страницы профиля `/profile/${id}`
 * @param id - id пользователя
 */
export const getProfilePath = (id: string) => `/profile/${id}`;
/**
 * Роут страницы со статьями '/articles'
 */
export const getArticlesPath = () => '/articles';
/**
 * Роут страницы конкретной статьи `/articles/${id}`
 * @param id - id статьи
 */
export const getArticlesDetailsPath = (id: string) => `/articles/${id}`;
/**
 * Роут страницы создания новой статьи '/articles/new'
 */
export const getArticleCreatePath = () => '/articles/new';
/**
 * Роут страницы редактирования статьи /articles/${id}/edit
 * @param id - id статьи
 */
export const getArticleEditPath = (id: string) => `/articles/${id}/edit`;
/**
 * Роут страницы администрирования '/admin'
 */
export const getAdminPanelPath = () => '/admin';
/**
 * Роут страницы ограничения доступа '/forbidden'
 */
export const getForbiddenPath = () => '/forbidden';
/**
 * Роут страницы с настройками '/settings'
 */
export const getSettingsPath = () => '/settings';
