import React, { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

/**
 * Компонент кнопки редизайненной с различными параметрами.
 * По умолчанию: variant = 'outline' , size = 'm'
 * variant? =  'clear' | 'outline' | 'filled'
 * size? = 'm' | 'l' | 'xl';
 * square? =  boolean
 * disabled? = boolean
 * addonLeft?: ReactNode
 * addonRight?: ReactNode
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        variant = 'outline',
        square,
        size = 'm',
        addonLeft,
        addonRight,
        disabled,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square ?? false,
        [cls.disabled]: disabled ?? false,
    };
    return (
        <button
            className={classNames(cls.Button, mods, [className ?? '', cls[variant ?? ''], cls[size ?? '']])}
            disabled={disabled}
            {...otherProps}>
            <div className={cls.withAddonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.withAddonRight}>{addonRight}</div>
        </button>
    );
});
