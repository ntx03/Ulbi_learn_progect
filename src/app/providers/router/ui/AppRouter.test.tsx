import {componentRender} from "@/shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import {getAboutPath, getAdminPanelPath, getProfilePath} from "@/shared/const/router";
import {screen} from "@testing-library/react";
import {UserRole} from "@/entities/User";

describe("app/router/AppRouter", () => {
    test("Страница должна отрендерится", async () => {
        componentRender(<AppRouter/>, {
            route: getAboutPath(),
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test("Страница не найдена", async () => {
        componentRender(<AppRouter/>, {
            route: '/nopage',
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('NoFoundPage');
        expect(page).toBeInTheDocument();
    });
    test("Редирект неавторизованного пользователя на главную страницу", async () => {
        componentRender(<AppRouter/>, {
            route: getProfilePath('1'),
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test("Доступ для авторизованного пользователя", async () => {
        componentRender(<AppRouter/>, {
            route: getProfilePath('1'),
            initialState: {
                user: {_inited: true, authData: {
                    username: 'admin',
                    id:'1'
                } },

            }
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test("Доступ запрещен (отсутстсвует роль)", async () => {
        componentRender(<AppRouter/>, {
            route: getAdminPanelPath(),
            initialState: {
                user: {_inited: true, authData: {
                    username: 'admin',
                    id:'1'
                } },
            }
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test("Доступ разрешен", async () => {
        componentRender(<AppRouter/>, {
            route: getAdminPanelPath(),
            initialState: {
                user: {_inited: true, authData: {
                    username: 'admin',
                    id:'1',
                    role: [UserRole.ADMIN]
                },
                },
            }
        });
        // findByTestId - это асинхронный метод т.к страницы асинхронные
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});