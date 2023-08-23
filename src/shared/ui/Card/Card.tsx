import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss';
import {type HTMLAttributes, memo, type ReactNode} from 'react';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme
}

const Card = ({className, children, theme = CardTheme.NORMAL, ...otherProps}: CardProps) => {
    return (
        <div className={classNames(cls.Card, {}, [className ?? '', cls[theme]])} {...otherProps}>
            {children}
        </div>
    )
};

export default memo(Card);