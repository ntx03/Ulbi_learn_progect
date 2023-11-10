import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type HTMLAttributes, memo, type ReactNode } from 'react';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    border?: CardBorder;
    max?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};
/**
 * Компонет карточки. Задает задний фон, скругления, бордеры.
 * @param variant 'normal' | 'outlined' | 'light'
 * @param max width: 100% or false
 * @param padding '0' | '8' | '16' | '24';
 * @param border 'round' | 'normal';
 */
const Card = ({
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    ...otherProps
}: CardProps) => {
    const paddingClass = mapPaddingToClass[padding];
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className ?? '',
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}>
            {children}
        </div>
    );
};

export default memo(Card);
