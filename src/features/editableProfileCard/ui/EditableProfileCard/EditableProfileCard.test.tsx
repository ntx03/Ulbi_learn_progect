import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {type Profile} from "entities/Profile";
import {profileReducer} from "features/editableProfileCard/model/slice/ProfileSlice";
import userEvent from "@testing-library/user-event"
import {$api} from "shared/api/api";

const profile: Profile = {
    id: "1",
    first: "Andrey",
    lastname: "Kachur",
    age: 36,
    country: Country.Russia,
    city: "Thumen",
    currency: Currency.RUB,
    username: 'admin'
}
const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            isLoading: false,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin'
            }
        }
    },
    asyncReducers: {
        // @ts-ignore
        profile: profileReducer,
    }
}
describe("features/EditableProfileCard", () => {
    test("click edit button", async () => {
        // @ts-ignore
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
    });
    test("При отмене значения должны обнуляться", async () => {
        // @ts-ignore
        componentRender(<EditableProfileCard id={'1'}/>, options);
        // кликаем по кнопке редактировать
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        // убеждаемся, что появляется кнопка отмены
        expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
        // очищаем инпуты имя и фамилия в форме
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));
        // заполняем их новыми данными
        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'broo');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'get');
        // убеждаемся, что новые данные появляются в инпутах
        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('broo');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('get');
        // нажимаем кнопку отмена
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));
        // убеждаемся, что в инпутах старые данные, до ввода новых
        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Andrey');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Kachur');
    });
    test("Должна появиться ошибка", async () => {
        // @ts-ignore
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
        // мокаем $api и передаем в него нужный метод отправки (put)
        const mockPutReq = jest.spyOn($api, 'put')
        // @ts-ignore
        componentRender(<EditableProfileCard id={'1'}/>, options);
        // кликаем по кнопке редактировать
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        // вводим новое имя
        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
        // сохраняем имя
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));
        // убедились что запрос ушел на сервер
        expect(mockPutReq).toHaveBeenCalled();
    });
});