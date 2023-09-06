import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { getTestId } from '../../helpers';

describe('Заходим на страницу профиля', () => {
    beforeEach(() => {
        cy.login('admin', '123').then(() => {
            const x = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '');
            cy.visit('/profile/' + x.id);
        });
    });
    it('редактируем страницу профиля', () => {
        cy.get(getTestId('ProfilePage'));
        cy.get(getTestId('ProfileCard.firstName')).should('have.value', 'Andrey');
    });
});
