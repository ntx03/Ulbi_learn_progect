// АДРЕС СТРАНИЦЫ, ПОЗИЦИЯ СКРОЛЛА
export type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
    scroll: ScrollSchema;
}
