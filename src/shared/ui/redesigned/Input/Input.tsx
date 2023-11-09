import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { type InputHTMLAttributes, memo, type ReactNode, useEffect, useRef, useState } from 'react';

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
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

// memo позволяет избежать лишних перерисовок
export const Input = memo(
    ({
        className,
        value,
        onChange,
        placeholder = '',
        type = 'text',
        theme,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
    }: InputProps) => {
        const ref = useRef<HTMLInputElement>(null);

        const [inFocused, setInFocused] = useState(false);

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };
        // Если убираем мышку с инпута, то убираем фокус
        const onBlur = () => {
            setInFocused(false);
        };
        // при клике мышкой на инпуте на нем появляется фокус
        const onFocus = () => {
            setInFocused(true);
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

        const Mods = {
            [cls.readonly]: readonly ?? false,
            [cls.focused]: inFocused,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        };

        return (
            <div className={classNames(cls.InputWrapper, Mods, [className ?? ''])}>
                <div className={cls.withAddonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    placeholder={placeholder}
                />
                <div className={cls.withAddonRight}>{addonRight}</div>
            </div>
        );
    },
);

export default memo(Input);
