import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class', 'class1'])).toBe('someClass class class1');
    });

    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class', 'class1'])).toBe(
            'someClass class class1 hovered scrollable',
        );
    });
    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class', 'class1'])).toBe(
            'someClass class class1 hovered',
        );
    });
    test('with mods', () => {
        expect(
            // @ts-ignore
            classNames('someClass', { hovered: true, scrollable: undefined }, ['class', 'class1']),
        ).toBe('someClass class class1 hovered');
    });
});
