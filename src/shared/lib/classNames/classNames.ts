export type Mods = Record<string, boolean | string | undefined>;

/**
 * Функция для удобного добавления классов стилей css
 * @param cls - объект с основными стилями компонента (модульный подход) cls: string
 * @param mods - модивикаторы стилей которые будут отображаться в зависимости от условия по умолчанию {} Mods = Record<string, boolean | string | undefined>
 * @param additional - навешиваемые стили, которые не зависят от булевых условий, и работают постоянно Array<string | undefined>
 */
export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    return [
        // основной класс cls он будет постоянный во всем проекте у компонента, где мы применяем эту функцию
        cls,
        // дополнительные классы которые мы хотим добавить при необходимости, в зависимости от того где мы будем использовать компонент, к основному классу
        ...additional.filter(Boolean),
        //
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
