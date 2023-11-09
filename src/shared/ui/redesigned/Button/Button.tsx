import { type ButtonHTMLAttributes, memo } from 'react';
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
    'data-testid'?: string;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        'data-testid': dataTestId = '',
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
            data-testid={dataTestId}
            {...otherProps}>
            {children}
        </button>
    );
});
