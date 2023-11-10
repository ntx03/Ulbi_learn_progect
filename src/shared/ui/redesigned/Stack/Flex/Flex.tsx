import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const flexDirectionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};
export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

/**
 * обертка flex для блоков
 * Параметры по умолчанию justify = 'start', direction = 'row',  align = 'center', gap = '8', max = false
 * Justify = 'start' | 'center' | 'end' | 'between';
 * Align = 'start' | 'center' | 'end';
 * Direction = 'row' | 'column';
 * Gap = '4' | '8' | '16' | '24' | '32';
 * Max = true: width: 100%;
 */
const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap = '8',
        max = false,
    } = props;

    const classes = [
        className,
        alignClasses[align],
        flexDirectionClasses[direction],
        justifyClasses[justify],
        gapClasses[gap],
    ];

    const mods = {
        [cls.max]: max,
    };

    return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>;
};

export default Flex;
