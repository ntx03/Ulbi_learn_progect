import { USER_LOCALSTORAGE_KEY } from '../../src/shared/const/localstorage';

Cypress.Commands.add('login', (username = 'user', password = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        cy.visit('/');
    });
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>;
        }
    }
}

export {};
