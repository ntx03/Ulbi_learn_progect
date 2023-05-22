import {classNames} from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class', 'class1'])).toBe('someClass class class1');
    });

    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['class', 'class1'])).toBe(
            'someClass class class1 hovered scrollable'
        );
    });
    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['class', 'class1'])).toBe(
            'someClass class class1 hovered'
        );
    });
    test('with mods', () => {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(classNames('someClass', {hovered: true, scrollable: undefined}, ['class', 'class1'])).toBe(
            'someClass class class1 hovered'
        );
    });
});
