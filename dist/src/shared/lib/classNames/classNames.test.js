import { classNames } from '../../../shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', function () {
        expect(classNames('someClass', {}, ['class', 'class1'])).toBe('someClass class class1');
    });
    test('with mods', function () {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class', 'class1'])).toBe('someClass class class1 hovered scrollable');
    });
    test('with mods', function () {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class', 'class1'])).toBe('someClass class class1 hovered');
    });
    test('with mods', function () {
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class', 'class1'])).toBe('someClass class class1 hovered');
    });
});
