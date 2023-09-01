import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

// Omit исключает ненужные типы из InputHTMLAttributes<HTMLHtmlElement>,
// которые мы сами задаем в InputProps. Если не использовать Omit
// и не указать пропсы которые мы переиспользуем сами, то будет ошибка.
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLHtmlElement>, 'onChange' | 'value' | 'readOnly'>;

export enum InputTheme {
    INVERT = 'invert',
    NORMAL = 'normal',
}

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    theme?: string;
    readonly?: boolean;
    'data-testid'?: string;
}

// memo позволяет избежать лишних перерисовок
export const Input = memo(
    ({
        className,
        value,
        onChange,
        placeholder = '',
        type = 'text',
        theme = InputTheme.NORMAL,
        autofocus,
        readonly,
        'data-testid': dataTestId,
    }: InputProps) => {
        const ref = useRef<HTMLInputElement>(null);
        const [inFocused, setInFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);

        const isCaretVisible = inFocused && !readonly;
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            //  ОПРЕДЕЛЯЕМ МЕСТОПОЛОЖЕНИЕ КОРРЕТКИ ПОСЛЕ ПОСЛЕДНЕГО СИМВОЛА
            setCaretPosition(e.target.value.length);
        };
        // Если убираем мышку с инпута, то убираем фокус
        const onBlur = () => {
            setInFocused(false);
        };
        // при клике мышкой на инпуте на нем появляется фокус
        const onFocus = () => {
            setInFocused(true);
        };
        // при помощи onSelect при клике мышкой на конкретный символ, определяем местоположение корретки
        const onSelect = (e: any) => {
            setCaretPosition(e?.target?.selectionStart || 0);
        };
        // при монтировании компонента устанавливаем фокус
        useEffect(() => {
            if (autofocus) {
                setInFocused(true);
                ref.current?.focus();
            }

            return () => {
                setInFocused(false);
            };
        }, [autofocus]);
        return (
            <div
                className={classNames(cls.InputWrapper, { [cls[theme]]: true, [cls.readonly]: readonly ?? false }, [
                    className ?? '',
                ])}>
                {placeholder && (
                    <div
                        className={classNames(cls.placeholder, { [cls[theme]]: true }, [
                            className ?? '',
                        ])}>{`${placeholder} >`}</div>
                )}
                <div className={classNames(cls.caretWrapper, { [cls[theme]]: true }, [className ?? ''])}>
                    <input
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        className={cls.input}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readonly}
                        data-testid={dataTestId}
                    />
                    {isCaretVisible && (
                        <span
                            className={classNames(cls.caret, { [cls[theme]]: true }, [className ?? ''])}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )}
                </div>
            </div>
        );
    },
);

export default memo(Input);
