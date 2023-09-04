import { getTestId } from '../../helpers';

describe('роутинг', () => {
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('user', '123');
        });
        it('переход на страницу профиля', () => {
            cy.visit('/profile/2');
            cy.get(getTestId('ProfilePage')).should('exist');
        });
        it('переход на страницу статей', () => {
            cy.visit('/articles');
            cy.get(getTestId('ArticlesPage')).should('exist');
        });
    });

    describe('Пользователь не авторизован', () => {
        it('переход на главную страницу', () => {
            cy.visit('/');
            cy.get(getTestId('MainPage')).should('exist');
        });
        it('переход на страницу о сайте', () => {
            cy.visit('/about');
            cy.get(getTestId('AboutPage')).should('exist');
        });
        it('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(getTestId('MainPage')).should('exist');
        });
        it('переход на страницу которой нет', () => {
            cy.visit('/profiles/1');
            cy.get(getTestId('NoFoundPage')).should('exist');
        });
        it('переход на страницу админа', () => {
            cy.visit('/admin');
            cy.get(getTestId('MainPage')).should('exist');
        });
        it('переход на страницу со статьями', () => {
            cy.visit('/articles');
            cy.get(getTestId('MainPage')).should('exist');
        });
    });
});
