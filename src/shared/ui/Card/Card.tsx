import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss';
import {type HTMLAttributes, memo, type ReactNode} from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

const Card = ({className, children, ...otherProps}: CardProps) => {
    return (
        <div className={classNames(cls.Card, {}, [className ?? ''])} {...otherProps}>
            {children}
        </div>
    )
};

export default memo(Card);